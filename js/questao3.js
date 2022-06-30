//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var answer = prompt("Qual é o termo relacionado a armazenar alguma alteração de código ou arquivo?");
  if (answer == "commit") {
    alert("Parabéns, você acertou! O termo " + answer + " refere-se a todas as mudanças feitas dentro do seu repositório.");
    window.location="questao4.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente."));
  }
  
};