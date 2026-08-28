param(
  [Parameter(Mandatory = $true)]
  [string]$ImagePath
)

$resolvedPath = (Resolve-Path -LiteralPath $ImagePath -ErrorAction Stop).Path

Add-Type -AssemblyName System.Runtime.WindowsRuntime
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
[void][Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
[void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
[void][Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime]
[void][Windows.Globalization.Language, Windows.Globalization, ContentType = WindowsRuntime]

$asTaskMethods = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
  $_.Name -eq 'AsTask' -and
  $_.IsGenericMethod -and
  $_.GetParameters().Count -eq 1 -and
  $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
}

function Wait-WinRtOperation {
  param(
    [Parameter(Mandatory = $true)]$Operation,
    [Parameter(Mandatory = $true)][Type]$ResultType
  )

  $method = $asTaskMethods | Select-Object -First 1
  if (-not $method) {
    throw 'Unable to locate the WinRT AsTask conversion method.'
  }
  $task = $method.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait()
  return $task.Result
}

$language = [Windows.Globalization.Language]::new('zh-Hans')
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($language)
if (-not $engine) {
  throw 'Windows Chinese OCR language pack (zh-Hans) is unavailable.'
}

$file = Wait-WinRtOperation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedPath)) ([Windows.Storage.StorageFile])
$stream = Wait-WinRtOperation ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
$decoder = Wait-WinRtOperation ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
$bitmap = Wait-WinRtOperation ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
$result = Wait-WinRtOperation ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])

$result.Lines | ForEach-Object { $_.Text }
