//função
function mostrarPagamento() {
    //ref. entrada
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    //ref. saída
    var outPagamento = document.getElementById("outPagamento");
    
    //atribuindo os valores do documento HTML
    var preco = Number(inValor.value);
    var tempo = Number(inTempo.value);

    //calculando o valor a ser pago
    var tempoUso = Math.ceil(tempo / 15);
    var pagamento = tempoUso * preco;

    //saída
    outPagamento.textContent = "Valor a pagar R$: " + pagamento.toFixed(2);
}
//ref. button
btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPagamento);