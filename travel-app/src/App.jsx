import {useState} from 'react';
import './index.css'

function App(){
  
  const [input,setInput] = useState('');
  const [todo,setTodo] = useState([]);

  const addTodo = () => {
    setTodo([...todo,{ id: Date.now(), title: input, done: false }]);
    console.log(todo);
  }

  const deleteTodo = (id) => setTodo(todo.filter((todo)=>todo.id !== id))
  

  const displayTodo = () =>
    todo.map((todo) => (
        <li key={todo.id} className='todo-item'>
          <input type='checkbox' id={todo.id}></input>
          <label htmlFor={todo.id}>{todo.title}</label>
          <button onClick={()=>deleteTodo(todo.id)}>X</button>
        </li>
      ))
  
  return(
    <>
      <div className="todo-container">
        <h2>TODO APP</h2>
        <div className='todo-input'>
          <br/>
          <input 
          type="text" 
          placeholder="Enter the task" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={()=>{{console.log(todo)} return addTodo()}}>ADD</button>
            </div>
            <ul className='todo-list'>
              {displayTodo()}
            </ul>
      </div>
    </>
  );
}

export default App;