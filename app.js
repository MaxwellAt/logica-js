alert("Boas vindas ao jogo de adivinhação!\n Esse jogo consiste em voce acertar um numero secreto.\n Boa sorte!");
let numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 3;
while (tentativas > 0) {
  let chute = parseInt(prompt("Digite um número entre 0 e 10"));
  if (numeroSecreto == chute) {
    alert("Parabéns! Você acertou!");
    break;
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor que o chute");
    tentativas--;
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior que o chute");
    tentativas--;
  }
}
if (tentativas == 0) {
  alert("Suas tentativas acabaram! O número secreto era " + numeroSecreto);
  window.location.href = "https://www.google.com.br/";
}
