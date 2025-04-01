<?php

$zonasHorarias = [
    'America/Lima' => 'Bogotá, Colombia',
    'America/New_York' => 'Nueva York, EE.UU.',
    'Europe/Madrid' => 'Madrid, España',
    'Asia/Tokyo' => 'Tokio, Japón'
];

if(isset($_POST['zona_horaria'])) {
    $zonaSeleccionada = $_POST['zona_horaria'];
    date_default_timezone_set($zonaSeleccionada);
    $fechaHora = date('Y-m-d H:i:s');
    echo "<p>Fecha y hora en {$zonasHorarias[$zonaSeleccionada]}: $fechaHora</p>";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Programa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<form method="post">
    <label for="zona_horaria">Selecciona una zona horaria:</label>
    <select name="zona_horaria" id="zona_horaria">
        <?php foreach($zonasHorarias as $zona => $ciudad): ?>
            <option value="<?php echo $zona; ?>"><?php echo $ciudad; ?></option>
        <?php endforeach; ?>
    </select>
    <button type="submit">Mostrar fecha y hora</button>
</form>
    </body>
</html>