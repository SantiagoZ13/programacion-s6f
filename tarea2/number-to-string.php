<?php
if(isset($_POST['valor'])) {
    $valor = $_POST['valor'];
    $tipo = $_POST['tipo'];
    
    if($tipo == 'numero') {
        $resultado = (float)$valor;
        echo "<p>El string '$valor' convertido a número es: $resultado</p>";
    } else {
        $resultado = (string)$valor;
        echo "<p>El número $valor convertido a string es: '$resultado'</p>";
    }
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
    <label for="valor">Ingrese un valor:</label>
    <input type="text" name="valor" id="valor" required>
    
    <label for="tipo">Convertir a:</label>
    <select name="tipo" id="tipo">
        <option value="string">String</option>
        <option value="numero">Número</option>
    </select>
    
    <button type="submit">Convertir</button>
</form>
</body>
</html>