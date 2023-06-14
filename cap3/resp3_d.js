function verificarTriangulo() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outVerificar = document.getElementById("outVerificar");
    var outTriangulo = document.getElementById("outTriangulo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (ladoA == 0 || ladoB == 0 || ladoC == 0 && isNaN(ladoA , ladoB , ladoC)) {
        alert("Informe valores válidos para os lados");
        inLadoA.focus();
        return;
    }

    if (ladoB + ladoC < ladoA || ladoA + ladoC < ladoB || ladoA + ladoB < ladoC) {
        outVerificar.textContent = "Lados não podem formar um Triângulo!";
    } else {
        outVerificar.textContent = "Lados podem formar um Triângulo!";
        
        if (ladoA == ladoB && ladoA == ladoC && ladoC == ladoB) {
            outTriangulo.textContent = "Tipo: Triângulo Equilátero";
        }

        if (ladoA != ladoB && ladoA != ladoC && ladoC != ladoB) {
            outTriangulo.textContent = "Tipo: Triângulo Escaleno";
        }

        if (ladoA == ladoB && ladoC != ladoA && ladoC != ladoB || ladoB == ladoC && ladoA != ladoB && ladoA != ladoC || ladoA == ladoC && ladoB != ladoA && ladoB != ladoC) {
            outTriangulo.textContent = "Tipo: Triângulo Isóceles";
        }
        
    } 
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);