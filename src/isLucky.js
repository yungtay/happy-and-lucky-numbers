export default function isLucky(number) {
  if (!Number.isInteger(number)) return "Não é um número inteiro";

  let numbersFiltred;
  numbersFiltred = Array.from({ length: number + 10 }, (_, i) => i + 1);

  let i = 1;
  while (i < numbersFiltred.length) {
    let k = numbersFiltred[i];

    numbersFiltred = numbersFiltred.filter((_, index) => {
      return (index + 1) % numbersFiltred[i] !== 0;
    });

    if (k === numbersFiltred[i]) i++;
  }

  return numbersFiltred.includes(number) ? "Sortudo" : "Não-Sortudo";
}
