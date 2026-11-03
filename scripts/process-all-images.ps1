$brain = "C:\Users\SWIFT GO\.gemini\antigravity\brain\fd786fdc-973f-4abd-8e1e-405d2cde5259"

$tasks = @(
    @{ Src = "$brain\facility_coban_rondo_1793705715657.jpg"; Dest = "public/images/destination-coban-rondo.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\facility_coban_rais_1793705735278.jpg"; Dest = "public/images/destination-coban-rais.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\facility_coban_putri_1793705750861.jpg"; Dest = "public/images/destination-coban-putri.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\facility_coban_talun_1793705768783.jpg"; Dest = "public/images/destination-coban-talun.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\not_found_misty_trail_1793686843554.jpg"; Dest = "public/images/destination-payung-pinus.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\facility_kaliwatu_rafting_1793705718899.jpg"; Dest = "public/images/destination-kaliwatu-rafting.jpg"; Width = 800; Quality = 55 },
    @{ Src = "$brain\facility_gunung_bromo_1793705732658.jpg"; Dest = "public/images/destination-gunung-bromo.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\facility_tumpak_sewu_1793705751352.jpg"; Dest = "public/images/destination-tumpak-sewu.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\family_gathering_batu_malang_1793686850974.jpg"; Dest = "public/images/destination-jambuluwuk.jpg"; Width = 800; Quality = 60 },

    @{ Src = "$brain\gallery_ice_breaking_1793705733861.jpg"; Dest = "public/images/gallery-ice-breaking.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\gallery_team_strategy_1793705755233.jpg"; Dest = "public/images/gallery-team-strategy.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\gallery_family_moment_1793705775082.jpg"; Dest = "public/images/gallery-family-moment.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\batu_malang_rafting_adventure_1793686840561.jpg"; Dest = "public/images/gallery-rafting.jpg"; Width = 800; Quality = 58 },
    @{ Src = "$brain\team_building_batu_malang_1793686670543.jpg"; Dest = "public/images/gallery-trust-fall.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\gallery_closing_group_1793705755000.jpg"; Dest = "public/images/gallery-closing-group.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\gallery_offroad_bromo_1793705766770.jpg"; Dest = "public/images/gallery-offroad-bromo.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\outbound_ldks_sekolah_batu_1793686835518.jpg"; Dest = "public/images/gallery-ldks-sekolah.jpg"; Width = 800; Quality = 60 },
    @{ Src = "$brain\about_malang_outbound_1793705717606.jpg"; Dest = "public/images/gallery-resort-gathering.jpg"; Width = 800; Quality = 60 }
)

foreach ($t in $tasks) {
    & "$PSScriptRoot\compress-image.ps1" -Src $t.Src -Dest $t.Dest -Width $t.Width -Quality $t.Quality
}

