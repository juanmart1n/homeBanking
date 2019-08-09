//Declaración de variables
var nombreUsuario = "Juan Martin";
var saldoCuenta = 10000;
var limiteExtraccion = 2000;

function sumaSaldo (x) {
    saldoCuenta = saldoCuenta + x;
}

function restaSaldo (x) {
    saldoCuenta = saldoCuenta - x;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completa
function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

}

function depositarDinero() {
  var deposito = prompt ("Ingrese dinero a depositar");
  parseInt(deposito);  
  var saldoAnterior = saldoCuenta;
  sumaSaldo (deposito);
  actualizarSaldoEnPantalla(); 
  
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}