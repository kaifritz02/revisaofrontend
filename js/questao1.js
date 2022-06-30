//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");



button.onclick = function () {
  var date = prompt("Quando foi criado o programa GIT?");
  if (date == "2005") {
    alert("Parabéns, você acertou! Como foi abordado no Módulo 1, o Git foi criado em 7 de abril de 2005!");
    window.location="aula2.html";
  }
  else {
    alert(("Ops! Você errou! Tente novamente!"));
  }
  
};