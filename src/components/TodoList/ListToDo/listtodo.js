import { useState } from "react";

function Listtodo({ todos, setTodos }) {
  const [allActive, setAllActive] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const deleteItem = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const checkTodoItem = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const checkedAll = () => {
    const isCompleted = !allActive;
    setAllActive(isCompleted);
    setTodos(
      todos.map((element) => {
        return {
          ...element,
          completed: isCompleted,
        };
      })
    );
  };

  const todoEdit = (todo) => {
    setSelectedTodo(todos.find((item) => item.id === todo.id));
  };

  const changeText = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      let changedtodo = selectedTodo;
      setTodos(
        todos.map((item) =>
          changedtodo.id === item.id ? { ...item, text: e.target.value } : item
        )
      );
      setSelectedTodo(null);
    }
  };

  return (
    <section className="main">
      <input
        id="toggleAll"
        type="checkbox"
        className="toggle-all"
        onChange={() => {
          checkedAll();
        }}
      />
      <label htmlFor="toggleAll">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo, id) => {
          return (
            <li key={id} className={todo.completed ? "completed" : "active"}>
              <div className="view">
                <input
                  id={id}
                  type="checkbox"
                  className="toggle"
                  onChange={() => checkTodoItem(todo)}
                  checked={todo.completed ? "checked" : ""}
                />
                <label onDoubleClick={() => todoEdit(todo)}>{todo.text}</label>
                <input
                  autoFocus
                  type="text"
                  className={`change-text ${
                    selectedTodo != null && todo.id === selectedTodo.id
                      ? " "
                      : "hidden"
                  }`}
                  onKeyDown={changeText}
                  placeholder="Change Item"
                />
                <button
                  className="destroy"
                  onClick={() => deleteItem(todo)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Listtodo;
