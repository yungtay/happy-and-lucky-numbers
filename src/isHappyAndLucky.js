import isLucky from "./isLucky.js";
import isHappy from "./isHappy.js";

export default function isHappyAndLucky(number) {
  if (!Number.isInteger(number)) return "Não é um número inteiro";

  const isLuckyNumber = isLucky(number)
  const isHappyNumber = isHappy(number)

  return "Número " + isLuckyNumber + " e " + isHappyNumber

}
