//função
function mostrarPromocao() {
    //ref. entrada
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    //ref. saída
    var outPromocao = document.getElementById("outPromocao");
    var outProdutoPromo = document.getElementById("outProdutoPromo");
    
    
    //atribuindo valores de entrada do documento HTML
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    //calculando promoção
    var promoProduto = (preco * 0.5);
    var promocao = (preco * 2) + promoProduto;

    //saída
    outPromocao.textContent = produto + " - Promoção: Leve 3 por: R$" + promocao.toFixed(2);
    outProdutoPromo.textContent = "O terceiro produto custa: R$" + promoProduto.toFixed(2);
}
//ref. button
btCalcular = document.getElementById("btCalcular");
//chamar função
btCalcular.addEventListener("click", mostrarPromocao);