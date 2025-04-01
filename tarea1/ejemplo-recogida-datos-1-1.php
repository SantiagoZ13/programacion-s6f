<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Formulario
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="mclibre-php-ejercicios.css" title="Color">
</head>

<body>
  <h1>Ejemplo de recogida de datos sin comprobación (Formulario)</h1>

  <form action="ejemplo-recogida-datos-1-2.php" method="get">
    <table>
      <tr>
        <td>Escriba su nombre:</td>
        <td><input type="text" name="nombre" size="30" maxlength="20"> </td>
      </tr>
      <tr>
        <td>Escriba su edad:</td>
        <td><input type="number" name="edad" min="1" max="120"> años</td>
      </tr>
    </table>

    <p>
      <input type="submit" value="Enviar">
      <input type="reset" value="Borrar">
    </p>
  </form>

  <footer>
    <p>Santiago Ponce Diaz - Programación S6F</p>
  </footer>
</body>
</html>
