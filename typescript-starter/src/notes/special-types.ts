// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// The primitives: string, number, boolean

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArr: number[] = [1, 2, 3];
const myTupple: [number, string] = [1, "hello"];
const myTupple1: [number, string[]] = [1, ["hello", "world"]];
// `any` vs `unknown`: any is to skip type check, unknown is to skip type check but have to check `typeof` before using it
const myFunc: Function = async function (
  arg1: number,
  arg2: string
): Promise<string> {
  return `${arg1} ${arg2}`;
};
myFunc(1, "hello").then((res: string) => console.log("This will be executed async:", res));

// Union Types: a new type which is one of the given types
const age: number | string = "";

// Type Aliases: a way to give a type a name
type Point = {
  x: number;
  y: number;
};

// Type Assertions or type cast
const myCastedArray = myTupple as number[];
const myCastedArray1 = <number[]>myTupple;
console.log(myCastedArray);

// null vs undefined: null is a value, undefined is a type.
// A undefined variable is a variable that has been declared but not assigned a value.
let myNullPoint: Point | undefined;
// console.log("null:", myNullPoint!.x); // non-null assertion
console.log("null point:", myNullPoint?.x || "no X point"); // optional chain

enum Direction {
  Up = 1,
  Down, // will be 2
  Left,
  Right,
}
console.log("enum:", Direction.Down == 2); // 1
// Utility Types: utility types is created by transformations of common types.
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// https://www.typescriptlang.org/docs/handbook/2/objects.html
//  https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
