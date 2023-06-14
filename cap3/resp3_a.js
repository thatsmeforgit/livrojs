function mostrarParImpar() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var num = Number(inNumero.value);

    if (num == 0 || isNaN(num)) {
        alert("Digite um número válido: ");
        inNumero.focus();
        return;
    }

    if (num % 2 == 0) {
        outResposta.textContent = num + " é PAR!";
    } else {
        outResposta.textContent = num + " é IMPAR!";
    }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarParImpar);