const $btnCalcular = document.querySelector( '#calcular' )
const $btnLimpiar = document.querySelector( '#limpiar' )

$btnCalcular.onclick = function () {
    const segundos = document.querySelectorAll( '#segundos' )
    let segundosTotales = 0
    for( let i = 0; i < segundos.length; i++ ) {
        segundosTotales += Number(segundos[i].value)
    }

    const minutosEnBaseASegundos = Math.floor( segundosTotales / 60 );
    const segundosFinales = segundosTotales % 60

    const minutos = document.querySelectorAll( '#minutos' )
    let minutosTotales = minutosEnBaseASegundos
    for( let i = 0; i < minutos.length; i++) {
        minutosTotales += Number( minutos[i].value) 
    }

    const horasEnBaseAMinutos = Math.floor( minutosTotales / 60)
    const minutosFinales = minutosTotales % 60
    
    const hora = document.querySelectorAll( '#horas' )
    let horasTotales = horasEnBaseAMinutos
    for( let i = 0; i < hora.length; i++) {
        horasTotales += Number( hora[i].value )
    }

    document.querySelector( '#tiempoTotal' ).innerHTML = `La duracion total de todos los videos es de ${horasTotales}:${minutosFinales}:${segundosFinales} hs.`
}

$btnLimpiar.onclick = function () {
    document.querySelector( '#tiempoTotal' ).innerHTML = ''
}