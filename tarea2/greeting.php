<?php
if(isset($_POST['nombre'])) {
    $nombre = htmlspecialchars($_POST['nombre']);
    $hora = date('H');
    
    if($hora < 12) {
        $saludo = "Buenos días";
    } elseif($hora < 18) {
        $saludo = "Buenas tardes";
    } else {
        $saludo = "Buenas noches";
    }
    
    echo "<h2>$saludo, $nombre!</h2>";
} else {
    echo "<h2>¡Hola, desconocido!</h2>";
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
    <label for="nombre">Ingresa tu nombre:</label>
    <input type="text" name="nombre" id="nombre" required>
    <button type="submit">Saludar</button>
</form>
</body>
</html>