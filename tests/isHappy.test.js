import isHappy from "../src/isHappy.js";

test("The function should return Feliz when evaluating the number 7", () => {
  expect(isHappy(7)).toBe("Feliz");
});

test("The function should return Não-Feliz when evaluating the number 21", () => {
  expect(isHappy(21)).toBe("Não-Feliz");
});

test("The function should return Feliz when evaluating the number 28", () => {
  expect(isHappy(28)).toBe("Feliz");
});

test("The function should return Não-Feliz when evaluating the number 142", () => {
  expect(isHappy(142)).toBe("Não-Feliz");
});

test("The function should return Não-Feliz when evaluating the number 37", () => {
  expect(isHappy(37)).toBe("Não-Feliz");
});

test("The function should return Feliz when evaluating the number 100", () => {
  expect(isHappy(100)).toBe("Feliz");
});