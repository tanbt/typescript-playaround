// https://www.typescriptlang.org/docs/handbook/2/functions.html

import { Point } from "./special-types";

/////////// Generic function with onstraint generic type ///////////
function getFirst<TYPE extends Point>(data: TYPE[]): TYPE | never {
  if (data.length < 1) {
    throw new Error("Array is empty");
  }
  return data[0];
}
getFirst<Point>([{ x: 1, y: 2 }]);

// multiple generic types with async
const getFirstLambda = async <T, P>(
  data: T[] | P[]
): Promise<T | P | never> => {
  if (data.length < 1) {
    throw new Error("Array is empty");
  }
  return data[0];
};

// generic interface
interface GenericIdentityFn<T> {
  prop1: T;
  func1: (arg: T) => T;
}

/////////// Function Overloading with overload signature ///////////
// Better to write a non-overloaded function
function add(a: number, b: number): number;
function add(a: string, b: string, c: string): string;
function add(a: any, b: any, c?: string): any {
  return a + b;
}
let sum = add(10, 20); // returns 30

//////// Rest parameters ///////////
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
console.log(multiply(10, 1, 2, 3, 4));

//////// Array and object destructing ///////////
const myArr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = myArr;
console.log(first, second, rest);   // 1    2      [3, 4, 5]

const myObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const { a, b, ...restObj } = myObj;
console.log(a, b, restObj);         // 1    2      { c: 3, d: 4, e: 5 }

