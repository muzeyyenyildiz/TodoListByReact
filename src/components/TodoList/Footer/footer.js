import React from "react";

function Footer({ menus, activeFilter, setActiveFilter, todos, setTodos }) {
  const choseActiveFilter = (selected) => {
    setActiveFilter(selected);
  };

  const ClearAllCompleted = () => {
    setTodos(todos.filter((item) => !item.completed));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length} </strong>
        items left
      </span>

      <ul className="filters">
        {menus.map((item, index) => {
          return (
            <li key={index}>
              <a
                onClick={() => choseActiveFilter(item)}
                className={activeFilter === item ? "selected" : ""}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <button 
        onClick={ClearAllCompleted} 
        className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
