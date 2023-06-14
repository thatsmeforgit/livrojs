//declara função
function mostrarPromocao() {
    //referência entrada
    var inMedicamento = document.getElementById("inMedicamento");
    var inValor = document.getElementById("inValor");
    //referência saída
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");

    //recebendo os valores do HTML
    var medicamento = inMedicamento.value;
    var valor = Number(inValor.value);
    
    //calculo da promoção
    var desconto = (valor % 1) * 2;
    var promocao = (valor * 2) - desconto;
    

    //saída
    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por apenas R$:" + promocao.toFixed(2);
}
//criar referência do btPromocao
var btPromocao = document.getElementById("btPromocao");
//chamar função
btPromocao.addEventListener("click", mostrarPromocao);