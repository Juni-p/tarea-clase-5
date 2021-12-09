const $ingresarDatos = document.querySelector("#ingresar");
const $limpiarDatos = document.querySelector("#limpiar");
const $datosUsuario = document.querySelector("#resultado");

$ingresarDatos.onclick = function () {
  const nombreUsuario = document.querySelector("#nombre-usuario").value;
  const edadUsuario = document.querySelector("#edad-usuario").value;

  saludarUsuario(nombreUsuario);
  mostrarDatosUsuario(nombreUsuario, edadUsuario);
};

function saludarUsuario(nombre) {
  return (document.querySelector("h1").innerHTML = `Bienvenido, ${nombre}.`);
}

function mostrarDatosUsuario(nombre, edad) {
  $datosUsuario.classList.add("alert");
  $datosUsuario.classList.add("alert-info");
  return ($datosUsuario.innerHTML = `nombre: ${nombre}<br>edad: ${edad}`);
}

$limpiarDatos.onclick = function () {
  $datosUsuario.classList.remove("alert");
  $datosUsuario.classList.remove("alert-info");
  document.querySelector("#resultado").innerHTML = "";
};
