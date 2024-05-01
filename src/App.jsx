import React, { useEffect } from 'react'
import { Counter } from './Examples/Counter'
import { store } from './redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './redux/Todo/todo.slice';
import { getData } from './redux/fetchData/fetchData.slice';
function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.fetchData.users)

  function send() {
    dispatch(addTodo("Hello"))

  }

  useEffect(() => {
    dispatch(getData())
  }, [])

  console.log(userData)
  return (
    <div>
      <button onClick={send}>Send</button>
      <Counter />
      <div>
        {
          userData.map((item) => <img src={item?.avatar} alt='img' />)
        }
      </div>

    </div>
  )
}

export default App