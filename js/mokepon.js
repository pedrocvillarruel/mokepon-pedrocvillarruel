let ataqueJugador //Funciónes Globales
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById ("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

        //El jugador elije su mascota
function seleccionarMascotaJugador() {
    
    let sectionSeleccionarMascota = document.getElementById ("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    
    
    let sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if  (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    }   
    else if  (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }   
    else if  (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }   
    else {
        alert("Selecciona una mascota 🔥💧🌱")  
    }
    
    seleccionarMascotaEnemigo()
}
        //El enemigo elije su mascota
function seleccionarMascotaEnemigo() {
    let ataqueAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if (ataqueAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }   
    else if (ataqueAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } 
    else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } 
}
        //ATAQUES
function ataqueFuego () {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    combate() //SE INVOCA A LA FUNCION QUE ALTERA EL HTML
}

function combate() {
    let spanvidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

        if(ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE")
        } else if (ataqueEnemigo == "FUEGO" && ataqueJugador == "TIERRA") {
            crearMensaje("🥳GANASTE🥳")
            spanVidasEnemigo--
            spanvidasJugador.innerHTML = vidasEnemigo
        } else if (ataqueEnemigo == "AGUA" && ataqueJugador == "FUEGO") {
            crearMensaje("🥳GANASTE🥳")
            spanVidasEnemigo--
            spanvidasJugador.innerHTML = vidasEnemigo
        } else if (ataqueEnemigo == "TIERRA" && ataqueJugador == "FUEGO") {
            crearMensaje("🥳GANASTE🥳")
            spanVidasEnemigo--
            spanvidasJugador.innerHTML = vidasEnemigo
        } else { 
            crearMensaje("😔PERDISTE😔")
            vidasJugador--
            spanvidasJugador.innerHTML = vidasJugador    
        }
            revisarVidas()
        }


   
function revisarVidas() {
    if (vidasEnemigo == 0) {
                crearMensajeFinal("🥳GANASTE🥳")
}   else if (vidasJugador == 0) {
                crearMensajeFinal("😔PERDISTE😔")
    }
}



    //MENSAJE QUE ALTERA EL HTML
function crearMensaje(resultado) {
        let sectionMensajes = document.getElementById("resultado")
        let ataquesDeJugador = document.getElementById("ataques-De-Jugador")
        let ataquesDeEnemigo = document.getElementById("ataques-De-Enemigo")
        
        let nuevoAtaqueDeJugador = document.createElement("p")
        let nuevoAtaqueDeEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDeJugador.innerHTML = ataqueJugador
        nuevoAtaqueDeEnemigo.innerHTML = ataqueEnemigo


        
        ataquesDeJugador.appendChild(nuevoAtaqueDeJugador)
        ataquesDeEnemigo.appendChild(nuevoAtaqueDeEnemigo)
}

    //MENSAJE QUE ALTERA EL HTML
function crearMensajeFinal(resultadoFinal) {
        let sectionMensajes = document.getElementById('resultado')
        
        sectionMensajes.innerHTML = resultadoFinal
    
        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled = true
        
        let sectionReiniciar = document.getElementById('reiniciar')
        sectionReiniciar.style.display = 'block'
    }

function reiniciarJuego() {
    location.reload()

}

        //FUNCIÓN ALEATORIA
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)