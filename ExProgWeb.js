var vetor = []

function enviar(){
    if(vetor.length < 10){
        var valor = document.getElementById("input").value;
        vetor.push(valor)
        document.getElementById("conj").innerText = "Conjunto: "+vetor;
        zerar()
    } else {
        i = 0
        par = 0
        impar = 0
        while(i < vetor.length){
            if(vetor[i] % 2 == 0){
                par++
            }else{
                impar++
            }
            i++
        }
        document.getElementById("par").innerText = "Pares: "+par;
        document.getElementById("impar").innerText = "Impares: "+impar;
        zerar()
    }
}
function resetar(){
    vetor = []
    document.getElementById("conj").innerText = "Conjunto:";
    document.getElementById("par").innerText = "Pares:";
    document.getElementById("impar").innerText = "Impares:";
}

function zerar(){
    document.getElementById("input").value = 0;
}
