//////// keyof
type Point = {
  x: number;
  y: number;
};
type P = keyof Point;
// const p: P = "z"; // Error: Type '"z"' is not assignable to type '"x" | "y"'

//////// typeof and instanceof
// In general, use typeof when you want to know the type of a primitive or a function,
// and use instanceof when you want to know if an object is an instance of a certain CLASS (not interface or type).
const p: Point = { x: 1, y: 2 };
console.log("type of p: ", typeof p);
class cPoint {}
const pi: cPoint = { x: 1, y: 2 };
console.log("instance of cPoint: ", pi instanceof cPoint); // false

// keys and values
const keys = Object.keys(p);
console.log("keys: ", keys);
const values = Object.values(p);
console.log("values: ", values);

// access key name by variable
type Person = {
  name: string;
  age: number;
};
const keyName = "age";
const person: Person = { name: "John", age: 30 };
console.log(person[keyName]); // 30
type Age = Person["age"]; // then Age is number

// conditional types
type ConditionalType = cPoint extends Point ? number : string;
