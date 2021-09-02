import isHappyAndLucky from "../src/isHappyAndLucky.js";

test("The function should return 'Número Sortudo e Feliz' when evaluating the number 7", () => {
  expect(isHappyAndLucky(7)).toBe("Número Sortudo e Feliz");
});

test("The function should return 'Número Sortudo e Não-Feliz' when evaluating the number 21", () => {
  expect(isHappyAndLucky(21)).toBe("Número Sortudo e Não-Feliz");
});

test("The function should return 'Número Não-Sortudo e Feliz' when evaluating the number 28", () => {
  expect(isHappyAndLucky(28)).toBe("Número Não-Sortudo e Feliz");
});

test("The function should return 'Número Não-Sortudo e Não-Feliz' when evaluating the number 142", () => {
  expect(isHappyAndLucky(142)).toBe("Número Não-Sortudo e Não-Feliz");
});

test("The function should return 'Número Sortudo e Não-Feliz' when evaluating the number 37", () => {
  expect(isHappyAndLucky(37)).toBe("Número Sortudo e Não-Feliz");
});

test("The function should return 'Número Não-Sortudo e Feliz' when evaluating the number 100", () => {
  expect(isHappyAndLucky(100)).toBe("Número Não-Sortudo e Feliz");
});