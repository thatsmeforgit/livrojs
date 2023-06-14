//declara a função mostraPromocao
function mostrarPromocao(){
    //Cria referência aos elementos de entrada manipulados pelo programa (ref. entrada)
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    //Cria referência aos elementos de saída manipulados pelo programa (ref. saída)
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //recebe os valores de entrada do documento HTML (entrada)
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);
    
    //calcula o valor de entrada e das parcelas (processamento)
    var entrada = preco * 0.50;
    var parcela = (preco *0.50) / 12;
    
    //altera o conteúdo dos parágrafos de resposta (config. saída)
    outVeiculo.textContent = "Promoção " + veiculo;
    outEntrada.textContent = "Entrada de R$" + entrada.toFixed(2);
    outParcela.textContent = "12x de R$" + parcela.toFixed(2);
}
//Cria uma referência ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
//registra um evendo associado ao botão, para carregar uma função (chamar função)
btVerPromocao.addEventListener("click", mostrarPromocao);