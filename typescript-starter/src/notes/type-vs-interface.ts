// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface iTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
interface iTodoExtra extends iTodo {
  note: string;
}

interface Student {
  id: number;
  name: string;
}

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

// In general, use typeof when you want to know the type of a primitive or a function,
// and use instanceof when you want to know if an object is an instance of a certain class.
