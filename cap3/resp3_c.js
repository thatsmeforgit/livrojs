function mostrarTempoTroco() {
    var inValor = document.getElementById("inValor");
    var outTempo1 = document.getElementById("outTempo1");
    var outTroco1 = document.getElementById("outTroco1");
    var outTempo2 = document.getElementById("outTempo2");
    var outTroco2 = document.getElementById("outTroco2");
    var outTempo3 = document.getElementById("outTempo3");
    var outTroco3 = document.getElementById("outTroco3");

    var valor = Number(inValor.value);

    if (valor == 0 || isNaN(valor)) {
        alert("Informe um valor válido!");
        inValor.focus();
        return;
    }

    if (valor >= 1.00 && valor < 1.75) {
        tempo = 15;
        troco = valor - 1.00;
        outTempo1.textContent = "Tempo: " + tempo + " Min";
        outTroco1.textContent = "Troco: R$" + troco.toFixed(2);
    }

    if (valor >= 1.75 && valor < 3.00) {
        tempo = 30;
        troco = valor - 1.75;
        outTempo2.textContent = "Tempo: " + tempo + " Min";
        outTroco2.textContent = "Troco: R$" + troco.toFixed(2);
    }

    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
        outTempo3.textContent = "Tempo: " + tempo + " Min";
        outTroco3.textContent = "Troco: R$" + troco.toFixed(2);
    }
}
var btConfirma = document.getElementById("btConfirma");
btConfirma.addEventListener("click", mostrarTempoTroco);