//declarando a função
function calcularPeso() {
    //ref. pela id="" do documento HTML de cada elemento
    //ref. entrada inNome
    var inNome = document.getElementById("inNome");
    //ref. entrada sexo - masc. e fem.
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    //ref. entrada inAltura
    var inAltura = document.getElementById("inAltura");
    //ref. saída outResposta
    var outResposta = document.getElementById("outResposta");

    //atribui os valores de entrada do HTML para variáveis no JS.
    //nome
    var nome = inNome.value;
    //sexo
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    //altura
    var altura = Number(inAltura.value);

    //condição para caso não seja inserido o nome e o sexo retorna alert()
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus();
        return;
    }

    //condição caso a altura seja informada corretamente retorna alert()
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    //condição para calcular o peso ideal "se (masculino == True)... { } else {se (feminino==True)... } 
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    //saída .textContent
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg";
}

//ref. do button pela id="btCalcular"
var btResultado = document.getElementById("btCalcular");
//chamando a função atravez do btResultado
btResultado.addEventListener("click", calcularPeso);

//declarar função que limpa os campos
function limparCampos() {
location.reload();
document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);