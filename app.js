/*
let titulo = document.querySelector('h1'); // Pega alguma propriedade no html // passando o nome do elemento que queremos manipular
titulo.innerHTML = 'Jogo do número Secreto';// enviar texto para a propriedade selecionada 

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/


//Criando uma função para gerar número aleatório função com return
let listaNumeroSorteado = [];
let numeroLimite = 10; // Variável para definir quantidade de números que irá ser sorteados 
let numeroSecreto = numeroAleatorio(); // variavel para armazenar o numero aleatório, chamando a função 
console.log('Numero gerado pela maquina = ' +numeroSecreto);
let tentativas = 1;

function numeroAleatorio() {
    //gera número de 1 até 10, se quiser mudar para mais basta alterar o número 10 // return para retornar o valor gerado
    //return parseInt(Math.random() * 10 + 1);
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Armazena em uma variável
    let quantidadeNumeroLista = listaNumeroSorteado.length; // Variável recebe a quantidade de números dentro da lista 
    
    if (quantidadeNumeroLista == numeroLimite){
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return numeroAleatorio(); // Chamada recursiva é chamar a função dentro dela mesma 
    }else{
        listaNumeroSorteado.push(numeroEscolhido); // push metodo para pegar o número e colocar dentro da lista 
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

/* Para substituir um texto e não precisar ficar criando código linha por linha, criar uma função para que isso seja chamada 
a função, passando os parametros direto de onde quer que seja alterado o texto 
Passando o parametro da função sendo a tag
*/
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // Para o programa falar
}
// Chamando a função para trocar o texto da tag desejada  // Atualizando, criando uma função própria e dentro chamando a função das mensagens 
function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

//Criar função sempre usa o mesmo padrão sem parametros 
function verificarChute(){
    //comparar se o numero secreto é igual ao numero do chute 
    let chute = document.querySelector('input').value; // aqui vai pegar o valor que foi digitado dentro do input
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!! Parabéns');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilitar o botão novo jogo assim que acertar o número secreto 
    
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}
//Criar uma função para limpar o campo quando errar o número 
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

//Criar uma função para dar vida ao botão reiniciar, colocando dentro da função de fato o que precisa ser feito 
function novoJogo(){
    numeroSecreto = numeroAleatorio();
    console.log('Numero gerado pela maquina = ' +numeroSecreto);
    limparCampo();
    tentativas = 1;
    mensagemInicial();// chamar a função para que o código não fique repetido e usar as boas práticas 
    document.getElementById('reiniciar').setAttribute('disabled', true); // Código para desabilitar o botão assim que for clicado em novo jogo
    // exibirTextoNaTela('h1', 'Jogo do número Secreto'); - usar a boa prática para não ficar repetindo código e quando precisar alterar, somente em uma parte     
}