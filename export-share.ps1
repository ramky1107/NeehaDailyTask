# Bundles the dashboard into one self-contained HTML file for sharing
# (styles, data, code and logo inlined). Output: share\Project-Next-Horizon-Dashboard.html
# Keep the same file name so a replaced OneDrive/SharePoint file keeps its link.
# Run from any folder:  powershell -ExecutionPolicy Bypass -File export-share.ps1

$root = $PSScriptRoot
$utf8 = New-Object Text.UTF8Encoding $false
function Read-Text($name) { [IO.File]::ReadAllText((Join-Path $root $name), $utf8) }

$html = Read-Text "index.html"
$css = Read-Text "styles.css"
$data = Read-Text "data.js"
$app = Read-Text "app.js"
$logo = [Convert]::ToBase64String([IO.File]::ReadAllBytes((Join-Path $root "Brand Logo.png")))

# Literal string replacements (no regex), so "$" in the code is left alone.
$html = $html.Replace('<link rel="stylesheet" href="styles.css" />', "<style>`n$css</style>")
$html = $html.Replace('<script src="data.js"></script>', "<script>`n$data</script>")
$html = $html.Replace('<script src="app.js"></script>', "<script>`n$app</script>")
$html = $html.Replace('src="Brand%20Logo.png"', "src=""data:image/png;base64,$logo""")

foreach ($ref in 'href="styles.css"', 'src="data.js"', 'src="app.js"', 'Brand%20Logo.png') {
  if ($html.Contains($ref)) { throw "Export failed: index.html reference not inlined: $ref" }
}

$outDir = Join-Path $root "share"
New-Item -ItemType Directory -Force $outDir | Out-Null
$out = Join-Path $outDir "Project-Next-Horizon-Dashboard.html"
[IO.File]::WriteAllText($out, $html, $utf8)
"Exported: $out ({0:N0} KB)" -f ((Get-Item $out).Length / 1KB)
