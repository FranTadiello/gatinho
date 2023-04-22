const controle = document.querySelectorAll("[data-controle]");
const gatometro = document.querySelectorAll("[data-gatometro]");
//console.log(gatometro)
const partes= {
  "comida": {
    "preguicoso": 10,
    "fofo":20,
    "brincalhao": 20,
    "mauHumor": -5
  },
  "carinho": {
    "preguicoso": 15,
    "fofo":15,
    "brincalhao": 10,
    "mauHumor": -5
  },
  "brinquedo": {
    "preguicoso": -10,
    "fofo":15,
    "brincalhao": 30,
    "mauHumor": -5
  },
  "muitoAmor": {
    "preguicoso": 10,
    "fofo":20,
    "brincalhao": 5,
    "mauHumor": 1
},
  "cobertinha": {
    "preguicoso": 30,
    "fofo":20,
    "brincalhao": -5,
    "mauHumor": -10
  } 
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        calculaSinal(evento.target.dataset.controle, evento.target.parentNode)
        atualizaGatometro(evento.target.dataset.parte)       
    })
})
//const operacao = '+'
function calculaSinal(operacao, controle) {
    const i = controle.querySelector("[data-contador]")
    //console.log(i)
    if(operacao === "-"){
        i.value = parseInt(i.value) - 1
    } else {
        i.value = parseInt(i.value) + 1
    }  
}
function atualizaGatometro(parte){
    //console.log(parte)
    gatometro.forEach( (elemento) => {
        //console.log(elemento.dataset.gatometro)
        elemento.textContent = parseInt(elemento.textContent) + partes[parte][elemento.dataset.gatometro]
    })
}



