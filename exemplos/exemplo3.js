const frm = document.querySelector(form)
const resposta = document.querySelector(h3)

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.value.inNumero)

    let resp = "";

    for (let i = numero; i > 0; i--) {
        console.log(i)
        resp += + "\n"
    }
    resposta.innerText = resp;
})