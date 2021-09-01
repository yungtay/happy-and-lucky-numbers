import isLucky from "../src/isLucky.js";

test("The function should return Sortudo when evaluating the number 7", () => {
  expect(isLucky(7)).toBe("Sortudo");
});

test("The function should return Sortudo when evaluating the number 21", () => {
  expect(isLucky(21)).toBe("Sortudo");
});

test("The function should return Não-Sortudo when evaluating the number 28", () => {
  expect(isLucky(28)).toBe("Não-Sortudo");
});

test("The function should return Não-Sortudo when evaluating the number 142", () => {
  expect(isLucky(142)).toBe("Não-Sortudo");
});

test("The function should return Sortudo when evaluating the number 37", () => {
  expect(isLucky(37)).toBe("Sortudo");
});

test("The function should return Não-Sortudo when evaluating the number 100", () => {
  expect(isLucky(100)).toBe("Não-Sortudo");
});
