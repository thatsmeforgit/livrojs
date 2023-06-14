    const frm = document.querySelector("form");
    const resposta = document.querySelector("h3");
    const respostat = document.querySelector("h3");

    frm.addEventListener("submit", (e) => {
        e.preventDefault();

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoB + ladoC < ladoA || ladoA + ladoC < ladoB || ladoA + ladoB < ladoC) {
        resposta.innerText = "Lados não podem formar um Triângulo!";
    } else {
        resposta.innerText = "Lados podem formar um Triângulo!";
        
        if (ladoA == ladoB && ladoA == ladoC && ladoC == ladoB) {
            respostat.innerText = "Tipo: Triângulo Equilátero";
        }

        if (ladoA != ladoB && ladoA != ladoC && ladoC != ladoB) {
            respostat.innerText = "Tipo: Triângulo Escaleno";
        }

        if (ladoA == ladoB && ladoC != ladoA && ladoC != ladoB || ladoB == ladoC && ladoA != ladoB && ladoA != ladoC || ladoA == ladoC && ladoB != ladoA && ladoB != ladoC) {
            respostat.innerText = "Tipo: Triângulo Isóceles";
        }
    }
    })


   

