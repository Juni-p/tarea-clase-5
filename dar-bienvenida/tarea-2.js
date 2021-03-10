const $ingresarDatos = document.querySelector( '#ingresar' ) 
const $limpiarDatos = document.querySelector( '#limpiar' )

$ingresarDatos.onclick = function() {
    const nombreUsuario = document.querySelector( '#nombre-usuario' ).value
    const edadUsuario = document.querySelector( '#edad-usuario' ).value

    saludarUsuario( nombreUsuario )
    mostrarDatosUsuario( nombreUsuario, edadUsuario )

}

function saludarUsuario( nombre ) {
    return document.querySelector( 'h1' ).innerHTML = `Bienvenido, ${nombre}.`
}

function mostrarDatosUsuario( nombre, edad ) {
    return document.querySelector( '#resultado' ).innerHTML = `nombre: ${nombre}<br>edad: ${edad}`
}

$limpiarDatos.onclick = function() {
    document.querySelector( '#resultado' ).innerHTML = ''
}