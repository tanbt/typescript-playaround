export default class Calculator {
    static Sum(a: number, b: number): number {
        let c = a + b;
        return c;
    }
}

console.log(Calculator.Sum(2,3));