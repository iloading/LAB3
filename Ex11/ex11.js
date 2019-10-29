window.onload = function() {
  //Pergunta 5 parte 2
  document.getElementById("nome").focus();
  
//variáveis
var num, nome, tentativas, nTentativas

//Iniciar os audios e respetivos links (Pergunta 7 parte 3)
var audioInicio = new Audio();
var audioErro = new Audio();
var audioPerder = new Audio();

audioInicio.src = "/media/start.mp3"
audioErro.src = "media/erro.mp3"
audioPerder.src = "media/lost.mp3"

//Inicio do código
tentativas = 5
document.getElementById('tentativas-numero').innerHTML = '5'

document.getElementById('inicio').onclick = function verificar() {
  nome = document.getElementById('nome').value
  if (nome != '') {
    document.getElementById('nome-apresenta').innerHTML = nome
    document.getElementById('inicio').style.display = 'none'
    num = Math.floor(Math.random()*101)
    console.log(num);
    audioInicio.play();
  }
  else {
    document.getElementById('mensagem_erro').style.fontSize = '15px'
    document.getElementById('mensagem_erro').innerHTML= 'Não entendi!!!';
  }
}


document.getElementById('apostar').onclick = function() {apostar()
}


//FUNÇÕES - Basicamente o que eu fiz foi atribuir uma das duas funções ao botão verde (ou vai apostar ou vai reiniciar)
//Para isso criei duas funções e atribuo essas funções ao botão no momento certo
//Existe outra forma de fazer isto através de variáveis e if's

//REINICIAR
function reiniciar() {
  tentativas = 5;
  numUtilizador = document.getElementById('numero').value = ''
  document.getElementById('msgresultado').innerHTML = ''
  document.getElementById('tentativas-numero').innerHTML = '5'
  document.getElementById('msgtitulo').innerHTML = ''
  document.getElementById('apostar').innerHTML = 'APOSTAR'
  document.getElementById('inicio').click();
  document.getElementById('victory').style.display = 'none'
  document.getElementById('apostar').onclick= function(){
    apostar()
  }
}//fecho da função reiniciar


function apostar() {
  numUtilizador = document.getElementById('numero').value
  if ( numUtilizador >= 1 && numUtilizador <= 100) {
    if (tentativas > 0) {
       if (numUtilizador != num){
        audioErro.play();
        tentativas = tentativas - 1
        document.getElementById('msgtitulo').className = 'text-danger'
        document.getElementById('msgtitulo').innerHTML = 'Erraste!'
        if (numUtilizador > num) {
          document.getElementById('msgresultado').innerHTML = 'O meu número é menor!'
          document.getElementById('tentativas-numero').innerHTML = tentativas
        }
        if (numUtilizador < num) {
          document.getElementById('msgresultado').innerHTML = 'O meu número é maior!'
          document.getElementById('tentativas-numero').innerHTML = tentativas
        }
      }else { //Se o utilizador acertar
        document.getElementById('victory').play();
        document.getElementById('victory').style.display = 'inherit'
        document.getElementById('msgtitulo').className = 'text-success'
        document.getElementById('msgtitulo').innerHTML = 'Acertaste!'
        nTentativas = 6-tentativas;
        document.getElementById('msgresultado').innerHTML ='Parabéns ' + nome + ', acertaste no número em apenas: ' + nTentativas +' tentativa(s)';

          //REINICIAR
          document.getElementById('apostar').innerHTML = 'REINICIAR'
          document.getElementById('apostar').onclick = function(){
            reiniciar()
          }
      }
    }else {//Se as tentativas chegarem a 0
      audioPerder.play();
      document.getElementById('msgtitulo').innerHTML = 'ATINGISTE O NUMERO MAXIMO DE TENTATIVAS'
      document.getElementById('apostar').innerHTML = 'REINICIAR'
      document.getElementById('apostar').onclick = function(){
        reiniciar()
      }
    }
  }else {//se o utilizador inserir um número fora do intervalo de 1 a 100
    document.getElementById('msgresultado').innerHTML = 'ERRO : O número deve estar entre 1 e 100'
  }
} //fecho da função apostar

} //fecho do window onload
