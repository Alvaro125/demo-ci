import { Calculadora } from '../src/calculadora';

describe('Calculadora', () => {
  let calc: Calculadora;

  beforeEach(() => {
    calc = new Calculadora();
  });

  test('Deve somar dois números corretamente', () => {
    expect(calc.soma(2, 3)).toBe(5);
  });

  test('Deve subtrair dois números corretamente', () => {
    expect(calc.subtrai(5, 2)).toBe(3);
  });

  test('Deve multiplicar dois números corretamente', () => {
    expect(calc.multiplica(2, 3)).toBe(6);
  });

  test('Deve dividir dois números corretamente', () => {
    expect(calc.divide(6, 3)).toBe(2);
  });

  test('Deve lançar erro ao dividir por zero', () => {
    expect(() => calc.divide(5, 0)).toThrow('Divisão por zero não é permitida');
  });
});
