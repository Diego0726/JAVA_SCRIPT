//Diego Barreto e Gabriel Levi
//DDM

const texto = document.querySelector('#texto')
const imagem = document.querySelector('#imagem')

const bt1 = document.querySelector('#btn1')
const bt2 = document.querySelector('#btn2')
const bt3 = document.querySelector('#btn3')
const bt4 = document.querySelector('#btn4')

//Eventos

bt1.addEventListener('click',img1)
bt2.addEventListener('click',img2)
bt3.addEventListener('click',img3)
bt4.addEventListener('click',img4)

//funções imagens
function img1 (){
    imagem.src="/questão 1/img/img1.jpg"
    texto.textContent="O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina."
}
function img2 (){
    imagem.src="/questão 1/img/img2.jpg"
    texto.textContent="O adolescente Marty McFly é transportado para 1955 quando uma experiência do excêntrico cientista Doc Brown dá errado. Ele viaja pelo tempo em um carro modificado e acaba conhecendo seus pais ainda jovens."
}
function img3 (){
    imagem.src="/questão 1/img/img3.webp"
    texto.textContent="Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York e adoram passar o tempo livre na cafeteria Central Perk."
}
function img4 (){
    imagem.src="/questão 1/img/img4.jpg"
    texto.textContent="Durante a Segunda Guerra Mundial, na França, judeus americanos espalham o terror entre o terceiro Reich. Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, planeja vingança quando um evento em seu cinema reunirá os líderes do partido."
}

//funções texto



