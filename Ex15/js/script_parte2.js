//COMPLIQUEI ... E MUITO xD Mandem dúvidas se não perceberem

  window.onload = function () {
  //1
  document.getElementById('validar').onclick = function() {
    escrever('msg_num',vNumero('txtBox1'))
  }
  //2
  document.getElementById('validarInteiro').onclick = function() {
    escrever('msg_int',vInteiro('txtBox2'))
  }
  //3
  document.getElementById('validarInteiroPositivo').onclick = function() {
    escrever('msg_int_pos',vIntPositivo('txtBox3'))
  }
  //4
  document.getElementById('validarInteiroPositivoPar').onclick = function() {
    escrever('msg_int_pos_par',vIntPosPar('txtBox4'))
  }
  //5
  document.getElementById('verificarPertenceIntervalo').onclick = function() {
    escrever('msg_pertence',vPerIntervalo('txtBox7','txtBox8','txtBox9'))
  }
  //6
  document.getElementById('verificarMultiplo').onclick = function() {
    escrever('msg_mul',vMultiplo('txtBox10','txtBox11'))
  }
  //7
  document.getElementById('verificarMin').onclick = function() {
    escrever('msg_min',vMinimo('txtBox12','txtBox13'))
  }
}

//FUNÇÕES
  function escrever(target, msg) {
    document.getElementById(target).innerHTML = msg
  }
  //1
  function vNumero(origem) {
    if (isNaN(document.getElementById(origem).value) == false) {
      msg = "é número"
    }
    else {
      msg = 'não é número'
    }
    return (msg);
  }
  //2
  function vInteiro(origem) {
    if ((document.getElementById(origem).value) == parseInt(document.getElementById(origem).value))  {
      msg = "é número inteiro"
    }
    else {
      msg = "não é número inteiro"
    }
    return msg;
  }
  //3
  function vIntPositivo(origem) {
    if (vInteiro(origem) == "é número inteiro") {
      if (document.getElementById(origem).value > 0){
        msg = "é número inteiro positivo"
      }
      else {
        msg = "não é número inteiro positivo"
      }
    }else {
      msg = "não é número inteiro positivo"
    }
    return msg
  }
  //4
  function vIntPosPar(origem) {
    if (vIntPositivo(origem) == "é número inteiro positivo") {
      if (document.getElementById(origem).value % 2 == 0) {
        msg = "é número inteiro positivo par"
      }
      else {
        msg = "não é número inteiro positivo par"
      }
    }
    else {
      msg = "não é número inteiro positivo par"
    }
    return msg
  }
  //5
  function vPerIntervalo(intervalo1,intervalo2,numero) {
    if ((document.getElementById(numero).value>document.getElementById(intervalo1).value) && (document.getElementById(numero).value<document.getElementById(intervalo2).value)){
      msg2 = "o número pertence ao intervalo"
    }
    if (vInteiro(intervalo1)=="não é número inteiro") {
      msg2 = "o primeiro número não é inteiro"
    }
    if (vInteiro(intervalo2)=="não é número inteiro") {
      msg2 = "o segundo número não é inteiro"
    }
    if (vInteiro(numero)=="não é número inteiro") {
      msg2 = "o terceiro número não é inteiro"
    }
    return msg2
    //utilizo msg2 porque se não a msg da função vInteiro sobrepunha-se e era essa que ia para o output
  }
  //6
  function vMultiplo(num1, num2) {
    if ((vIntPositivo(num1)=="é número inteiro positivo") && (vIntPositivo(num2)=="é número inteiro positivo") ) {
      if (((document.getElementById(num1).value) % (document.getElementById(num2).value) == 0) || ((document.getElementById(num2).value) % (document.getElementById(num1).value) == 0)) {
        msg2 = "os números são múltiplos"
      }
    }
    else if (vIntPositivo(num1)=="não é número inteiro positivo") {
      msg2 = "o primeiro número não é um número inteiro positivo"
    }
    else if (vIntPositivo(num2)=="não é número inteiro positivo") {
      msg2 = "o segundo número não é um número inteiro positivo"
    }
    return msg2
    }
    //7
    function vMinimo(num1, num2) {
      if ((vIntPositivo(num1)=="é número inteiro positivo") && (vIntPositivo(num2)=="é número inteiro positivo") ) {
        if(document.getElementById(num1).value < document.getElementById(num2).value){
          msg2= "O num2 é MAIOR que o num1"
        }
        else if (document.getElementById(num1).value > document.getElementById(num2).value) {
          msg2= "O num1 é MAIOR que o num2"
        }
      }
      else if (vIntPositivo(num1)=="não é número inteiro positivo") {
        msg2 = "o primeiro número não é um número inteiro positivo"
      }
      else if (vIntPositivo(num2)=="não é número inteiro positivo") {
        msg2 = "o segundo número não é um número inteiro positivo"
      }
      return msg2
    }
