import React from "react";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false },
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddToDo setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );
    setTodos(updatedTodos);
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{ textDecoration: todo.done ? "line-through" : "" }}
          key={todo.id}
        >
          {todo.text}
          {/* <DeleteTodo todo={todo} setTodos={setTodos} /> */}
        </li>
      ))}
    </ul>
  );
}

function AddToDo({ setTodos }) {
  const inputRef = React.useRef();
  function handleAddToDo(e) {
    e.preventDefault();
    const text = e.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false,
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddToDo}>
      <input id="addTodo" placeholder="Add ToDo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
