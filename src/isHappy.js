export default function isHappy(number, maxIteration = 100) {
  if (!Number.isInteger(number)) return "Não é um número inteiro";
  if (maxIteration < 1) return "Não-Feliz";

  let sum = 0;

  const numberAsString = "" + number;
  const digits = numberAsString.split("");

  digits.forEach((digit) => {
    sum = sum + digit ** 2;
  });

  return sum === 1 ? "Feliz" : isHappy(sum, maxIteration - 1);
}
