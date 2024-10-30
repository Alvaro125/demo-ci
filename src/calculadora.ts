export class Calculadora {
    soma(a: number, b: number): number {
      return a + b;
    }
  
    subtrai(a: number, b: number): number {
      return a - b;
    }
  
    multiplica(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
      }
      return a / b;
    }
  }
  