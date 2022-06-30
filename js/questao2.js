//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual é o termo relacionado ao armazenamento de projeto?");
  if (answer == "repositório") {
    alert("Parabéns, você acertou! O " + answer + " é o diretório de um projeto, onde é armazenado todos os dados de um projeto.");
    window.location="questao3.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};