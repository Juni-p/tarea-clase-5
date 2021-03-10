const $btnCalcular = document.querySelector( '#calcular' )
const $btnLimpiar = document.querySelector( '#limpiar' )

$btnCalcular.onclick = function() {
    const numeros = document.querySelectorAll( '#numero' )
    const arrayNumeros = []
    for( let i = 0; i < numeros.length ; i++){
       arrayNumeros.push( Number(numeros[i].value ))
    }

    calcularPromedio( arrayNumeros )
    calcularNumeroMasPequeño( arrayNumeros )
    calcularNumeroMasGrande( arrayNumeros )
    obtenerNumeroMasRepetido( arrayNumeros )
}

function calcularPromedio( array ) {
    let numerosAPromediar = 0
    for( let i = 0; i < array.length ; i++ ){
        numerosAPromediar += array[i]
    }
    let promedio = (numerosAPromediar / array.length).toFixed( 1 )
    document.querySelector( '#promedio' ).innerHTML = `El promedio es ${ promedio}`
}

function calcularNumeroMasPequeño( array ) {
    document.querySelector( '#numMasPequenio' ).innerHTML = `<br>El numero mas pequeño es ${Math.min(...array)}`
}

function calcularNumeroMasGrande( array ) {
    document.querySelector( '#numMasGrande' ).innerHTML = `<br>El numero mas grande es ${Math.max(...array)}`
}

function obtenerNumeroMasRepetido( array ) {
    let contador = 0;
    let repeticiones = 0;
    let numeroMasRepetido;

    for( let i = 0; i < array.length; i++ ) { 
        for( let j = 0; j < array.length; j++ ) {
            if( Number( array[i] ) == Number( array[j])) {
                contador++
            }
            if( repeticiones < contador ) {
                repeticiones = contador
                numeroMasRepetido = Number( array[i] )
            }
        }
        contador = 0
    }

    document.querySelector( '#numMasRepetido' ).innerHTML = `<br>El numero mas repetido es ${numeroMasRepetido}`
}