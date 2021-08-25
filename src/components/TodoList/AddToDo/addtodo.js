import { useState } from "react";

function Addtodo({ todos, setTodos }) {
  const defaultTodoItem = { id: Math.random(), text: "", completed: false };
  const [todoItem, setTodoItem] = useState(defaultTodoItem);

  const onChangeInput = event => {
    setTodoItem({ ...todoItem, text: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!todoItem.text.length) {
      alert("Write something");
      return false;
    }
    setTodos([...todos, todoItem]);
    setTodoItem(defaultTodoItem);
    
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          autofocus
          className="new-todo"
          value={todoItem.text}
          onChange={onChangeInput}
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
}

export default Addtodo;
