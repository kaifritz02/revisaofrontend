//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual comando para navegar entre pastas?");
  if (answer == "cd") {
    alert("Parabéns, você acertou! O comando " + answer + " é usado para navegar entre as pastas do seu computador.");
    window.location="questao9.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};