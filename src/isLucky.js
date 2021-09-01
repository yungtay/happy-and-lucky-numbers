export default function isLucky(number) {
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