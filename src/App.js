import './App.css';
import { useState } from 'react';

function App() {
  const[todo,settodo] =useState([{title:'안녕하세요'}])
  const[list,setlist] =useState('')
  const todoHandler = (event)=>{
    setlist(event.target.value)
  }

  const AddedHandler = ()=>{
    const Newadded={
      title:list
    }
    settodo([...todo,Newadded])
  }

  return (
    <div className="App">
      <div className='TodoAdd'>
      <input type='text' id='Todo' value={list} onChange={todoHandler}></input>
      <button id='button' onClick={AddedHandler}>추가하기</button>
      <br></br>
      <h1>TodoList</h1>
      </div>
      <div className='addedTodo'>
       
        {
          todo.map((e)=>{
            return (<div className='square'>{e.title}</div>)
          })
        }
       
      </div>
    </div>
  );
}

export default App;
