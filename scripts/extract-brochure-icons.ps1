Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $projectRoot 'tmp_logo_extract\Mohs_Mobile_Pros_Brochure_Printable_p1.png'
$outputDirectory = Join-Path $projectRoot 'public\images\icons\brochure'

New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$source = [System.Drawing.Bitmap]::FromFile($sourcePath)

function Export-CircularIcon {
  param(
    [string]$Name,
    [int]$CenterX,
    [int]$CenterY,
    [int]$Size,
    [double]$Radius
  )

  $left = [int][Math]::Round($CenterX - ($Size / 2))
  $top = [int][Math]::Round($CenterY - ($Size / 2))
  $output = New-Object System.Drawing.Bitmap $Size, $Size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($output)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.DrawImage($source, (New-Object System.Drawing.Rectangle 0, 0, $Size, $Size), (New-Object System.Drawing.Rectangle $left, $top, $Size, $Size), [System.Drawing.GraphicsUnit]::Pixel)
  $graphics.Dispose()

  $center = ($Size - 1) / 2
  for ($y = 0; $y -lt $Size; $y++) {
    for ($x = 0; $x -lt $Size; $x++) {
      $distance = [Math]::Sqrt([Math]::Pow($x - $center, 2) + [Math]::Pow($y - $center, 2))
      if ($distance -gt $Radius) {
        $pixel = $output.GetPixel($x, $y)
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $pixel.R, $pixel.G, $pixel.B))
      }
    }
  }

  $destination = Join-Path $outputDirectory "$Name.png"
  $output.Save($destination, [System.Drawing.Imaging.ImageFormat]::Png)
  $output.Dispose()
}

function Export-WhiteKeyIcon {
  param(
    [string]$Name,
    [int]$Left,
    [int]$Top,
    [int]$Width,
    [int]$Height
  )

  $output = New-Object System.Drawing.Bitmap $Width, $Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($output)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.DrawImage($source, (New-Object System.Drawing.Rectangle 0, 0, $Width, $Height), (New-Object System.Drawing.Rectangle $Left, $Top, $Width, $Height), [System.Drawing.GraphicsUnit]::Pixel)
  $graphics.Dispose()

  for ($y = 0; $y -lt $Height; $y++) {
    for ($x = 0; $x -lt $Width; $x++) {
      $pixel = $output.GetPixel($x, $y)
      $minimum = [Math]::Min($pixel.R, [Math]::Min($pixel.G, $pixel.B))
      if ($minimum -gt 225) {
        $alpha = [Math]::Max(0, [Math]::Min(255, (245 - $minimum) * 13))
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $pixel.R, $pixel.G, $pixel.B))
      }
    }
  }

  $destination = Join-Path $outputDirectory "$Name.png"
  $output.Save($destination, [System.Drawing.Imaging.ImageFormat]::Png)
  $output.Dispose()
}

$serviceIcons = @(
  @{ Name = 'cryosectioning'; X = 851; Y = 290 },
  @{ Name = 'frozen-section-preparation'; X = 851; Y = 346 },
  @{ Name = 'he-staining'; X = 851; Y = 402 },
  @{ Name = 'special-stains'; X = 851; Y = 458 },
  @{ Name = 'lab-setup-takedown'; X = 851; Y = 589 },
  @{ Name = 'equipment-support'; X = 851; Y = 648 },
  @{ Name = 'temporary-histology-staffing'; X = 851; Y = 707 },
  @{ Name = 'coverage-calendar'; X = 851; Y = 765 },
  @{ Name = 'workflow-integration'; X = 851; Y = 824 },
  @{ Name = 'laboratory-consulting'; X = 851; Y = 883 }
)

foreach ($icon in $serviceIcons) {
  Export-CircularIcon -Name $icon.Name -CenterX $icon.X -CenterY $icon.Y -Size 44 -Radius 21.5
}

Copy-Item -LiteralPath (Join-Path $outputDirectory 'he-staining.png') -Destination (Join-Path $outputDirectory 'tissue-embedding-orientation.png') -Force

Export-CircularIcon -Name 'brochure-microscope' -CenterX 978 -CenterY 115 -Size 84 -Radius 41
Export-CircularIcon -Name 'check-outline' -CenterX 470 -CenterY 282 -Size 46 -Radius 22.5
Export-CircularIcon -Name 'check-solid' -CenterX 1378 -CenterY 322 -Size 30 -Radius 14.5
Export-CircularIcon -Name 'phone' -CenterX 1585 -CenterY 511 -Size 40 -Radius 19.5
Export-CircularIcon -Name 'email' -CenterX 1585 -CenterY 559 -Size 40 -Radius 19.5
Export-CircularIcon -Name 'scheduling' -CenterX 1585 -CenterY 609 -Size 40 -Radius 19.5
Export-CircularIcon -Name 'website' -CenterX 1585 -CenterY 668 -Size 40 -Radius 19.5
Export-CircularIcon -Name 'location' -CenterX 1585 -CenterY 718 -Size 40 -Radius 19.5

Export-WhiteKeyIcon -Name 'case-volume' -Left 1194 -Top 592 -Width 50 -Height 50
Export-WhiteKeyIcon -Name 'quality-consistency' -Left 1189 -Top 792 -Width 58 -Height 58

$source.Dispose()

Write-Output "Extracted brochure icons to $outputDirectory"
