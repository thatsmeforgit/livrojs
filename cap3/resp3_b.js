function mostrarRadar() {
    var inVelPermitida = document.getElementById("inVelPermitida");
    var inVelCondutor = document.getElementById("inVelCondutor");
    var outRadar = document.getElementById("outRadar");

    var permitida = Number(inVelPermitida.value);
    var velCondutor = Number(inVelCondutor.value);

    var multa = permitida + (permitida * 0.20);

    if (permitida == 0 || isNaN(permitida)) {
        alert("Informe um valor válido para a Velocidade Permitida!");
        inVelPermitida.focus();
        return;
    }

    if (velCondutor == 0 || isNaN(velCondutor)) {
        alert("Informe um valor válido para a Velocidade do Condutor!");
        inVelCondutor.focus();
        return;
    }

    if (velCondutor <= permitida) {
        outSemMulta.textContent = "Vel. do Condutor: " + velCondutor + "km/h" + "\nVel. Permitida: " + permitida + "km/h" + "\nSem Multa";
    }

    if (velCondutor > permitida && velCondutor <= multa) {
        outMultaLeve.textContent = "Vel. do Condutor: " + velCondutor + "km/h" + "\nVel. Permitida: " + permitida + "km/h" + "\nMulta Leve"; 
    }

    if (velCondutor > permitida && velCondutor > multa) {
        outMultaGrave.textContent = "Vel. do Condutor: " + velCondutor + "km/h" + "\nVel. Permitida: " + permitida + "km/h" + "\nMulta Grave";
    }
}
var btRadar = document.getElementById("btRadar");
btRadar.addEventListener("click", mostrarRadar);