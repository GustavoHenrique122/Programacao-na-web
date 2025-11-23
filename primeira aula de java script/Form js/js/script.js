var Nome = document.querySelector("#usuario")
var email = document.querySelector("#email")
var senha = document.querySelector("#senha")
var data = document.querySelector("#data")
var telefone = document.querySelector("#telefone")
var assunto = document.querySelector("#assunto")
var mensagem = document.querySelector("#Comentario")

var buttom = document.querySelector("button")
var dados = document.querySelector("#dados")
var caixa = document.querySelector(".caixa")

buttom.addEventListener('click',exibirDados) 

function exibirDados() {
    dados.innerHTML = `
    <p> Nome e Sobrenome: ${Nome.value} </p>
    <p> Email: ${email.value} </p>
    <p> Senha: ${senha.value} </p>
    <p> Data: ${data.value} </p>
    <p> Telefone: ${telefone.value} </p>
    <p> Assunto: ${assunto.value} </p>
    <p> Mensagem: ${mensagem.value} </p>
    `
}

buttom.addEventListener('click',mudartamanho)

function mudartamanho() {
    caixa.classList.toggle("expandida");
}