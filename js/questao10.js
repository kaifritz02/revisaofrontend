//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual comando é usado para confirmar uma alteração no seu repositório?");
  if (answer == "git commit") {
    alert("Parabéns, você acertou! O comando " + answer + " confirma suas mudanças de código ou arquivo, assim podendo monitorar de forma eficiente a linha do tempo do seu projeto.");
    window.location="fim.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};