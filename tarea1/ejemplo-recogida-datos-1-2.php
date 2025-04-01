<?php
/**
 * Ejemplo de recogida de datos sin comprobación (Resultado) - ejemplo-recogida-datos-1-2.php
 * @author Santiago Ponce Diaz
 */
  $name = $_GET['nombre'];
  $age = $_GET['edad'];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Resultado
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="mclibre-php-ejercicios.css" title="Color">
</head>

<body>
  <h1>Ejemplo de recogida de datos sin comprobación (Resultado)</h1>

  <p>Su nombre es: <?=  $name ?></p>
  <p>Su edad es: <?= $age ?></p>
  <p><a href="ejemplo-recogida-datos-1-1.php">Volver al formulario.</a></p>

  <footer>
    <p>Santiago Ponce Diaz - Programación S6F</p>
  </footer>
</body>
</html>
