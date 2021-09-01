function isLucky(number) {
  let numbersFiltred;
  numbersFiltred = Array.from({ length: number * 2 }, (_, i) => i + 1);

  let i = 1;
  while (i < numbersFiltred.length) {
    let k = numbersFiltred[i];

    numbersFiltred = numbersFiltred.filter((number, index) => {
      return (index + 1) % numbersFiltred[i] !== 0;
    });

    if (k === numbersFiltred[i]) i++;
  }

  return numbersFiltred.includes(number) ? "Sortudo" : "Não-Sortudo";
}

function isHappy(number, maxIteration = 100) {
  if (maxIteration < 1) return "Não-Feliz";

  let sum = 0;

  const numberAsString = "" + number;
  const digits = numberAsString.split("");

  digits.forEach((digit) => {
    sum = sum + digit ** 2;
  });

  return sum === 1 ? "Feliz" : isHappy(sum, maxIteration - 1);
}
