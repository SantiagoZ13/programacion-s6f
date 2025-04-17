let contrasenia = "12345678";

contrasenaValida(contrasenia);

let contrasenaValida = (contrasenia) => {
  if (contrasenia.length < 8) {
    console.log("La contraseña es inválida");
    return false;
  } else {
    console.log("La contraseña es válida");
    return true;
  }
};

let calcularImpuestos = (edad, ingresos) => {
  if ((edad >= 18) & (ingresos >= 1000)) {
    return ingresos * (ingresos * 0.4);
  } else {
    return 0;
  }
};

let calcularIMC = (peso, altura) => {
  let imc = peso / Math.pow(altura, 2);
  if (imc < 18.5) {
    return "Bajo de peso";
  } else if ((imc >= 18.5) & (imc <= 24.9)) {
    return "Normal";
  } else if ((imc >= 25) & (imc <= 29.9)) {
    return "Sobrepeso";
  } else if (imc >= 30) {
    return "Obeso";
  }
};

let printArray = (array) => {
  array.map((element) => {
    console.log(element);
  });
};
