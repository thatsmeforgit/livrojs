//declarar função
function calcularPreco() {
    //criar referência de entrada
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    
    //criar referência de saída
    var outValor = document.getElementById("outValor");

    //obtém conteúdo dos campos do preco/kg e do consumo
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    //calcula o consumo
    var valor = (quilo / 1000) * consumo;

    //altera o conteúdo da resposta
    outValor.textContent = "Valor a pagar R$:" + valor.toFixed(2);
}
//cria uma referência ao elemento btValorPagar (botão)
var btCalcular = document.getElementById("btCalcular");
//registra um evento associado ao botão
btCalcular.addEventListener("click", calcularPreco);
