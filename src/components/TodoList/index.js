import { useState, useEffect } from "react";
import "./style.css";
import Addtodo from "./AddToDo/addtodo";
import Listtodo from "./ListToDo/listtodo";
import Footer from "./Footer/footer";
import initialTodos from "./data";

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [activeFilter, setActiveFilter] = useState("All");
  const menus = ["All", "Active", "Completed"];

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const filteredTodoList = () => {
    return todos.filter((item) => {
      if (activeFilter === "All") {
        return true;
      } else if (activeFilter === "Completed" && item.completed) {
        return true;
      } else if (activeFilter === "Active" && !item.completed) {
        return true;
      }
      return false;
    });
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const filteredTodos = filteredTodoList();

  return (
    <div>
      <section className="todoapp">
        <Addtodo todos={filteredTodos} setTodos={setTodos} />

        <Listtodo todos={filteredTodos} setTodos={setTodos} />

        <Footer
          menus={menus}
          setTodos={setTodos}
          todos={filteredTodos}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default TodoList;
