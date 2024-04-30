import React from 'react'
import { Counter } from './Examples/Counter'
import { store } from './redux/store'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/Todo/todo.slice';

function App() {
  const dispatch=useDispatch();
 
  function send(){
  dispatch(addTodo("Hello"))
  console.log(store.getState())
  }
  return (
    <div>
      <button onClick={send}>Send</button>
      <Counter />
      
    </div>
  )
}

export default App