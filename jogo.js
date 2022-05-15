var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search // search recupera tudo que está a direita do ? 
nivel = nivel.replace('?', '') // replace substitui o caracter selecionado do primeiro paramentro pelo o caracter selecionado no segundo paramentro

// selecionando o tempo na função posicaoRandomica de acordo com a dificuldade selecionada

if(nivel === 'normal') {

    criaMosquitoTempo = 1500

} else if (nivel === 'dificil') {

    criaMosquitoTempo = 1000

} else if (nivel === 'chucknorris') {

    criaMosquitoTempo = 750

}

// function que captura o tamanho da tela do usuário e adicionada ao Body do programa
function ajustaTamanhoPalcoJogo() { 
    altura = window.innerHeight  
    largura = window.innerWidth

    console.log(largura, altura)
}
// executando a function
ajustaTamanhoPalcoJogo()

// Cronometro
var cronometro = setInterval(function() { // a cada 1 segundo inclementa -1 na variavel tempo

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro) // exclui a execução desta função da memória da nossa aplicação
        clearInterval(criaMosquito) 
        window.location.href = 'vitoria.html'
     } else {
       document.getElementById('cronometro').innerHTML = tempo // innerHTML adiciona o valor da variavel tempo dentro da tag do id cronomtro
     }

}, 1000)

// function para criar posição randomica
 function posicaoRandomica(){ 

     
        
    //remover o mosquito anterior (caso exista)

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //adiciona um loop na variavel vidas que tem o valor de 1 após o mosquito sumir sem ser clicado vidas passa a valer 2 alterando a imagem para o coração vazio se vidas for maior do que 3 é Game Over

        if(vidas > 3 ) {
            window.location.href = 'fim_de_jogo.html' // após vidas maior que 4 o usuário é redirecionado para a página fim_de_jogo

        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
        
    }
    
    //Math.random gera números aleatórios de que vão de 0 até 1, Math.floor arredonda o número com casas decimais para baixo, em seguida multiplica com o valor da largura e altura da tela e - 90 pro objeto não ultrapassar a tela do usuário.
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    // Se posicao for menor que 0 recebe 0 se não recebe ela mesma .
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)

    //criar elemento html 
    var mosquito = document.createElement('img'); // criando elemento img atribuida na váriavel mosquito
    mosquito.src = 'imagens/mosquito.png' // adicionando a imagen
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // adicionando a function de tamanho e Lado aleatório a classe style da imagen com um espaço no meio pro JS entender que são duas classes e não apenas uma
    mosquito.style.left = posicaoX + 'px' // adicionando cordenada em px a esqueda do navegador para posicionar a imagem
    mosquito.style.top = posicaoY + 'px' // adicionando cordenada em px no topo do navegador para posicionar a imagem
    mosquito.style.position = 'absolute' // atribuindo posição absoluta
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito) // adicionando ao body da página

 }
 
    

    

// function que cria tamanho aleatórios para o mosquito
function tamanhoAleatorio() {
    // número arredondado para baixo multiplicado por 3 onde o resultado tem apenas 3 possibilidades 0, 1 ou 2 que atribui a variavel classe
    var classe = Math.floor(Math.random() * 3)
    

    // se classe for igual a 0 returna o estylo mosquito1 se for 1 mosquito2 e se for 2 mosquito3
    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }

}

    // function que muda o lado do mosquito
function ladoAleatorio() {
    // número arredondado para baixo multiplicado por 2 onde o resultado tem apenas 2 possibilidades 0 e 1  que atribui a variavel classe
    var classe = Math.floor(Math.random() * 2)
    

    // se classe for igual a 0 returna o estylo mosquito1 se for 1 mosquito2 e se for 2 mosquito3
    switch(classe) {
        case 0:
            return 'LadoA'

        case 1:
            return 'LadoB'
        
        
    }
}




    
