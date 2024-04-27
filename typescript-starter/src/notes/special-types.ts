// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// The primitives: string, number, boolean

import { Todo, iTodo } from "./type-vs-interface";

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
myFunc(1, "hello").then((res: string) =>
  console.log("This will be executed async:", res)
);
const values: ReadonlyArray<string> = new Array<string>("hello", "world");

// Union Types: a new type which is one of the given types
const age: number | string = "";

// Type Aliases: a way to give a type a name
export type Point = {
  x: number;
  y: number;
  type?: "AA" | "BB"; // Discriminated unions
};
type Student = {
  id: number;
  name: string;
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

// never vs void: a function that doesn't explicitly return anything will have a return type of void, not never.
// The never type is reserved for functions that never return normally, either because they throw an error or enter an infinite loop.

////////// Object types
// https://www.typescriptlang.org/docs/handbook/2/objects.html
//  https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
// When not yet know all the names of properties ahead of time, but know the type of those properties' values.
// NOTE: all the properties' values must be the same type, we can use union type to define multiple types.
interface GeneralPerson {
  [index: string]: string;
  name: string;
  123: string;
}
interface GeneralPerson1 {
  [index: string | number]: string | number | iTodo | any;
  name: string;
  123: number;
}
const mPerson: GeneralPerson = {
  0: "hello",
  somePropName: "world",
  name: "John",
  123: "123",
};
console.log("GeneralPerson:", mPerson);

type GeneralTypeDirection = {
  // index signatures for type
  [key: string]: boolean | Direction;
};
const d: GeneralTypeDirection = {
  aa: true,
  bb: Direction.Down,
};

/////////////// Utility Types: utility types is created by transformations of common types.
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type PartialPoint = Partial<Point>; // all properties in a type or interface are optional
type RequiredPoint = Required<Point>; // all properties in a type or interface are required
type ReadonlyPoint = Readonly<GeneralPerson>;
const stdnn: Record<string, Student> = {
  // key must be string, number, or symbol
  bobby: { id: 1, name: "Bob" },
  johny: { id: 2, name: "John" },
};
// in JS Map, key can be anything
const jsMap: Map<Point, Student> = new Map<Point, Student>([]);
jsMap.set({ x: 1, y: 2 }, { id: 1, name: "Bob" });

type ReviewTodo = Pick<iTodo, "title" | "completed">; // pick only title and completed from iTodo
type TodoData = Omit<Todo, "title" | "completed">; // exclude userId from Todo. Reverse of Pick

type T0 = Exclude<"a" | "b" | "c", "a">; // T0 = "b" | "c"
type T1 = Extract<"a" | "b" | "c", "a" | "f" | "c">; // T1 = "a" | "c"

function f1(a: number, b: string): { x: number; y: number } {
  return { x: 1, y: 2 };
}
// define a type based on the params of a function
type ParamTypes = Parameters<typeof f1>; // ParamTypes = [number, string]
// define a type based on the type of a function's return
type ReturnTypes = ReturnType<typeof f1>; // ReturnTypes = { x: number; y: number }
