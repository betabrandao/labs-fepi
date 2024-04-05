import { Calculator } from "../src/calculadora";

describe('teste de calculadora', () => {

  test('soma 1 + 2 deve ser 3', () => {
    expect(Calculator.soma(1,2)).toBe(3);
  });
  
  test('soma 0.1 + 0.2 deve ser 0.3', () => {
    expect(Calculator.soma(0.1,0.2)).toBe(0.3);
  });

  test('divisao 10 / 2 deve ser 5', () => {
    expect(Calculator.divisao(10,2)).toBe(5);
  });
  
  test('divisao 10 / 0 deve ser Infinity', () => {
    expect(Calculator.divisao(10,0)).toBe(Infinity);
  });

});
