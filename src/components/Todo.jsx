import { useState } from "react";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

let nextId = 1;
const initialTodos = [{ id: 0, title: "ToDo Example", done: true }];

function ToDo() {
  const [todos, setTodos] = useState(initialTodos);

  function addToDo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function editToDo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function deleteToDo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <div>
        <AddToDo onAddToDo={addToDo} />
        <ToDoList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteToDo}
        />
      </div>
    </>
  );
}

export default ToDo;