// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
export type Todo = {
  // is an alias of multiple types
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface iTodo {
  // interface is object structure
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
interface iTodoExtra extends iTodo {
  // can extend multiple interfaces
  note: string;
}

export interface Student {
  id: number;
  name: string;
}
type StudentTodo = Todo & Student; // intersection type, just like interface extending

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((td: Todo) => {
    console.log("----------------------");
    console.log("Type of: ", typeof td);
    console.log(td);
  });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((td: iTodo) => {
    console.log("----------------------");
    console.log("Type of: ", typeof td);
    console.log(td);
  });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((td: Student) => {
    console.log("----------------------");
    console.log("Type of: ", typeof td);
    console.log(td);
  });
