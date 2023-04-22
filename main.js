const controle = document.querySelectorAll("[controle]");
console.log(controle)

controle.forEach(
)


const operacao = '+'
function calcula(operacao, controle) {
    const i = controle.querySelector("[contador]")
    //console.log(i)
    if(operacao === "-"){
        i.value = parseInt(i.value) - 1
    } else {
        i.value = parseInt(i.value) + 1
    }
    
}

