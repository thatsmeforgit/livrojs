function mostrarSaque() {
    var inSaque = document.getElementById("inSaque");
    var outCem = document.getElementById("outCem");
    var outCinquenta = document.getElementById("outCinquenta");
    var outDez = document.getElementById("outDez");

    var saque = Number(inSaque.value);
    
    if (saque == 0 || isNaN(saque)) {
        alert("Digite um valor válido p/ Saque");
        inSaque.focus();
        return;
    }

    var divCem = Math.floor(saque / 100);
    var restoCem = saque % 100;
    if (restoCem > 50) {
        var divCinquenta = Math.floor(restoCem / 50);
    } else {
        var restoCinquenta = restoCem % 50;
    }
    
    if (restoCinquenta % 10 != 0) {
        alert("Valor inválido p/ as notas disponíveis (R$100,00 - R$50,00 - R$10,00)");
        inSaque.focus();
        return;
    } else {
        var divDez = Math.floor(restoCinquenta / 10);
        
        if (divCem > 0) {
            outCem.textContent = "Notas de R$100,00: " + divCem;  
        }
        if (divCinquenta > 0) {
            outCinquenta.textContent = "Notas de R$50,00: " + divCinquenta;
        }
        if (divDez > 0) {
            outDez.textContent = "Notas de R$10,00: " + divDez;
        }
        
    }  
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarSaque);

