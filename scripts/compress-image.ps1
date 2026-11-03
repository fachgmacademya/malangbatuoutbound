param(
    [string]$Src,
    [string]$Dest,
    [int]$Width = 960,
    [long]$Quality = 75
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $Src)) {
    Write-Error "Source file not found: $Src"
    exit 1
}

$bmp = [System.Drawing.Bitmap]::new($Src)
$w = $bmp.Width
$h = $bmp.Height
if ($w -gt $Width) {
    $h = [int]($h * ($Width / $w))
    $w = $Width
}

$resized = [System.Drawing.Bitmap]::new($w, $h)
$g = [System.Drawing.Graphics]::FromImage($resized)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($bmp, 0, 0, $w, $h)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
$encoderParams.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, $Quality)

$destDir = Split-Path -Parent $Dest
if ($destDir -and -not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

$resized.Save($Dest, $codec, $encoderParams)
$g.Dispose()
$resized.Dispose()
$bmp.Dispose()

$file = Get-Item $Dest
$kb = [math]::Round($file.Length / 1024, 2)
Write-Host "Created $($file.Name): $($file.Length) bytes ($($kb) KB)"
