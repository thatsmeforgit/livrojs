//obter os elementos do HTML
const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form
    
    const numero = Number(frm.inNumero.value)
    
    if (numero % 2 == 0){
        resposta.innerText = "O número digitado é par!"
        resposta.style.color = "green"
    } else {
        resposta.innerText = "O número é impar!"
        resposta.style.color = "red"
    }
} )