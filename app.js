let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    const titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    const numeroDeUsuario = parseInt(
        document.getElementById("valorUsuario").value
    );
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(
            "p",
            `Acertaste el número en ${intentos} ${
                intentos == 1 ? "vez" : "veces"
            }`
        );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function generarNumeroSecreto() {
    let numerGenerado = Math.floor(Math.random() * 10) + 1;
    

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    } else {
        //Si el numero generado esta  incluido en la lista
        if (listaNumerosSorteados.includes(numerGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numerGenerado);
            return numerGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);

    numeroSecreto = generarNumeroSecreto();

    intentos = 1;
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar boton de juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

condicionesIniciales();
