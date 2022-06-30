//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual comando que ter permite verificar todos os comandos anteriormente usados?");
  if (answer == "git history") {
    alert("Parabéns, você acertou! O comando " + answer + " lista todos os comandos que foram usados no Git Bash!");
    window.location="questao10.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};