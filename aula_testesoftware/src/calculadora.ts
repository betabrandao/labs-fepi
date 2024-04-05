export class Calculator {
  static soma(a: number, b: number):number {
   return Number((a+b).toFixed(1)); 
  }

  static divisao(a: number, b: number):number {
    if (b===0) {
      return Infinity;
    }
    return a / b;
  }
}
