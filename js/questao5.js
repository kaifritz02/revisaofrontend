//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual dos tipos de repositório trata-se sobre o projeto que vai ser armazenado apenas na sua máquina?");
  if (answer == "local") {
    alert("Parabéns, você acertou! O termo " + answer + " é o projeto que pode ser compartilhado ou não com outros desenvolvedores, sendo armazenado no GitHub");
    window.location="aula3.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};