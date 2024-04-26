import Ajv from "ajv";

const ajv = new Ajv();

// Define your schemas
const todoSchema = {
  type: "object",
  properties: {
    userId: { type: "number" },
    id: { type: "number" },
    title: { type: "string" },
    // completed: { type: "boolean" },
    completed: { type: "number" },
  },
  required: ["userId", "id", "title", "completed"],
};

const validateTodo = ajv.compile(todoSchema);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((td) => {
    if (!validateTodo(td)) {
      console.error(validateTodo.errors);
      throw new Error("Received data does not fit the Todo schema");
    } else {
      console.log("Received data fits the Todo schema");
      console.log(td);
    }
  });
