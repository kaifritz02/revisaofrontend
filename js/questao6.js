//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual comando usado para iniciar um repositório?");
  if (answer == "git init") {
    alert("Parabéns, você acertou! O comando " + answer + " é usado para iniciar um repositório local.");
    window.location="questao7.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};