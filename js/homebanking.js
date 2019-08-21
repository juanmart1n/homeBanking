//Declaración de variables.
var nombreUsuario = "Mariela Cavalli";
var saldoCuenta = 10000;
var limiteExtraccion = 5000;
var saldoAnterior = saldoCuenta;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = 1302;
// Funciones declaradas por developer.
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
    var limiteDeExtraccion = parseInt(prompt("Ingrese nuevo limite de extraccion."));
    limiteExtraccion = limiteDeExtraccion;
    actualizarLimiteEnPantalla();
    alert("Su nuevo limite de extraccion es:$ " + limiteExtraccion);
}

function extraerDinero() {
    var extraccion = parseInt(prompt("Ingrese dinero a extraer."));
    saldoAnterior = saldoCuenta;
    // validacion
        if (extraccion > saldoCuenta) {
            alert ("El monto ingresado supera el saldo en su cuenta.");
        }
        else if (extraccion > limiteExtraccion) {
            alert ("La cantidad ingresada supera el limite de extraccion.");
        }
        else if ((extraccion % 100) != 0) {
            alert("Solo puede extraer billetes de $100");
        }
        else {   
            restaSaldo (extraccion);
            actualizarSaldoEnPantalla();
            alert("Usted Extrajo:$ " + extraccion + "\nSaldo Anterior:$ " + saldoAnterior + "\nSaldo Actual:$ " + saldoCuenta);
        }
}

function depositarDinero() {
    var deposito = parseInt(prompt ("Ingrese dinero a depositar."));  
    saldoAnterior = saldoCuenta;
    sumaSaldo (deposito);
    actualizarSaldoEnPantalla(); 
    alert("Usted deposito:$ " + deposito + "\nSaldo Anterior:$ " + saldoAnterior + "\nSaldo Actual:$ " + saldoCuenta);
}

function pagarServicio() {
    var servicios = parseInt(prompt("Ingrese el número correspondiente al servicio que desea pagar\n1- Agua\n2-Luz\n3-Internet\n4-Telefono"));
    switch (servicios) {
        case 1: 
            if (agua > saldoCuenta){
                alert("No posee saldo suficiente para pagar este servicio.");
            }else {
                    alert("Has pagado el sericio de agua. \n Saldo Anterior:$" + saldoAnterior + "\n Dinero descontado:$" + agua +"\n Saldo Actual:$" + saldoCuenta);
                    restaSaldo(agua);
                    actualizarSaldoEnPantalla();
                }
                break;
        case 2:
            if (luz > saldoCuenta){
                alert("No posee saldo suficiente para pagar este servicio.");
            }else {
                    alert("Has pagado el sericio de agua. \n Saldo Anterior:$" + saldoAnterior + "\n Dinero descontado:$" + agua +"\n Saldo Actual:$" + saldoCuenta);
                    restaSaldo(luz);
                    actualizarSaldoEnPantalla(); 
                }
                break;
        case 3:
            if (internet > saldoCuenta){
                alert("No posee saldo suficiente para pagar este servicio.");
            }else {
                    alert("Has pagado el sericio de agua. \n Saldo Anterior:$" + saldoAnterior + "\n Dinero descontado:$" + agua +"\n Saldo Actual:$" + saldoCuenta);
                    restaSaldo(internet);
                    actualizarSaldoEnPantalla(); 
                }
                break;
        case 4:
            if (telefono > saldoCuenta){
                alert("No posee saldo suficiente para pagar este servicio.");
            } else {
                    alert("Has pagado el sericio de agua. \n Saldo Anterior:$" + saldoAnterior + "\n Dinero descontado:$" + agua +"\n Saldo Actual:$" + saldoCuenta);
                    restaSaldo(telefono);
                    actualizarSaldoEnPantalla();  
                }               
    }   

}

function transferirDinero() {
    var transferencia = parseInt(prompt("Ingrese monto a tranferir."));
    saldoAnterior = saldoCuenta;
    // validacion
        if (transferencia > saldoCuenta){
            alert("No posee fondos suficientes para realizar la transferencia.")
        }
        else{
            var cuentaAcredora = parseInt(prompt("Ingrese el numero de cuenta a la cual desea transferir."));
        }
        if(cuentaAcredora != cuentaAmiga1 || cuentaAcredora != cuentaAmiga2){
           alert("Solo puede transferir dinero a una cuenta amiga.")
        }
        else if (cuentaAcredora == cuentaAmiga1 || cuentaAcredora == cuentaAmiga2){
            restaSaldo (transferencia);
            actualizarSaldoEnPantalla();
            alert("Se ha transferido\n $ "+transferencia+" A la cuentra nro "+cuentaAcredora);
        }
       
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