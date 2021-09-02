import readlineSync from "readline-sync";
import isHappyAndLucky from "../src/isHappyAndLucky.js";

let number;

while (!Number.isInteger(number)) {
  number = readlineSync.question(
    "Selecione o número que você deseja saber se é Sortudo e Feliz: "
  );

  number = Number(number);
  if (!Number.isInteger(number)) {
    console.log("A entrada deve ser um número inteiro");
  }
}

console.log( "\n" + isHappyAndLucky(number));
