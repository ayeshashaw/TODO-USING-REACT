import React, { useState } from "react";
import Todoinputs from "./Todoinputs";
import TodoList from "./TodoList";

function App() {
  const [ListTodo, setListTodo] = useState([]);

  const addList = (InputText) => {
    if (InputText.trim() === "") {
      alert("Cannot add an empty item");
      return;
    }
    setListTodo([...ListTodo, InputText]);
  };

  const clearAllList = () => {
    setListTodo([]); // Clear all items
  };

  const deleteList = (index) => {
    const newListTodo = [...ListTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
  };

  return (
    <div className="Main-container">
      <div className="center-container">
        <Todoinputs addList={addList} clearAllList={clearAllList} />
        <h1 className="heading">TODO</h1>
        <hr />
        <ul>
          {ListTodo.map((listItem, i) => (
            <TodoList
              key={i}
              index={i}
              items={listItem}
              deleteList={deleteList}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
