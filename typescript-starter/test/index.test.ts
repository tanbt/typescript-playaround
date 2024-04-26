import { Calculator } from "../src/util/calculator";

describe("Calculator", () => {
  test("Test add", () => {
    const calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
  });
});
