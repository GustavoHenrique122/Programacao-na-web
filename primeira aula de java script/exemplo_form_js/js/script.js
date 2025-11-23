var produto = document.querySelector("#txProduto")
var descr = document.querySelector("#txDescricao")
var valor = document.querySelector("#txValor")
var qtd = document.querySelector("#txQtd")
var dtCadastro = document.querySelector("#txDataCadastro")

var btDados = document.querySelector("button")
var resultado = document.querySelector("#resultado")

btDados.addEventListener('click',exibirDados)

function exibirDados(){
    //alert("Teste com o click do botão")

    resultado.innerHTML = `
        <p> Nome do produto: ${produto.value} </p>
        <p> Descrição: ${descr.value} </p>
        <p> Valor: ${valor.value} </p>
        <p> Quantidade: ${qtd.value} </p>
        <p> Data do cadastro: ${dtCadastro.value} </p>   
    `
}