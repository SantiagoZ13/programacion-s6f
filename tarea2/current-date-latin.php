<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Programa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
date_default_timezone_set('America/Lima');

$fechaHoraLima = date('Y-m-d H:i:s');
echo "Fecha y hora actual en Lima: " . $fechaHoraLima;
?>
</body>
</html>
