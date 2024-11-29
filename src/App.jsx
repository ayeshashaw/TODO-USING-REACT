import { useState } from 'react';
import './App.css';
import Todoinputs from './components/Todoinputs';
import TodoList from './components/TodoList';

function App() {
  const [ListTodo, setListTodo] = useState([]);

  const addList = (InputText) => {
    if (InputText.trim() === '') {
      alert('Cannot add an empty item');
      return;
    }
    setListTodo([...ListTodo, InputText]);
  };
  const clearAllList = () => {
    setListTodo([]);
  };

  
  const deleteList = (index) => {
    const newListTodo = [...ListTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
  };

  return (
    <div className="Main-container">
      <div className="center-container">
        <Todoinputs addList={addList} />
        
        <h1 className="heading">TODO</h1>
        <hr />
        {ListTodo.map((listItem, i) => (
          <TodoList key={i} index={i} items={listItem} deleteList={deleteList} />
        ))}
      </div>
    </div>
  );
}

export default App;
