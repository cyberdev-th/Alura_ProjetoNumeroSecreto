alert("Boas vindas ao jogo do número secreto");
let max = 100;
let min = 1
let numeroSecreto = parseInt(Math.random() * max + min);
console.log(numeroSecreto);
let chuteUsuario;
let tentativas = 1;

while (chuteUsuario != numeroSecreto) {
  chuteUsuario = Number(prompt(`Escolha um número entre ${min} e ${max}:`));
  if (numeroSecreto == chuteUsuario) {
    break;
  } else {
    if (numeroSecreto > chuteUsuario) {
      alert("O número secreto é maior que " + chuteUsuario);
    } else {
      alert(`O número secreto é menor que ${chuteUsuario}`);
    }
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';

alert(
  `Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`
);