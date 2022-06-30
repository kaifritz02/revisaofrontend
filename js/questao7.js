//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual comando para criar um diretório vazio?");
  if (answer == "mk dir") {
    alert("Parabéns, você acertou! O comando " + answer + " é usado para criar uma pasta vazia no local escolhido.");
    window.location="questao8.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};