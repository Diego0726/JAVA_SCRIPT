// Diego Barreto e Gabriel Levi

//DOM

const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')
const situacao = document.querySelector('#situacao')

//Evento

btn.addEventListener('click',imc)

//função

function imc(){
    
    let massa = peso.value
    let alt = Number(altura.value)
    let imcfinal = massa/(alt*alt)
    var situacao = ""

    if(imcfinal < 18.5) {
        situacao = "Magreza";
    } else if (imcfinal >=18.5 && imcfinal < 25){
        situacao = "Peso Normal";
    } else if (imcfinal >= 25 && imcfinal < 30){
        situacao = "Acima do Peso";
    } else {
        situacao = "Obsidade";
    }
    resultado. innerHTML = "Seu imc é : " +imcfinal.toFixed(2) +"<br>" + situacao

}