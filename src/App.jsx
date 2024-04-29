import { useEffect, useState } from 'react'
import Counter from './Examples/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './redux/users/user.actions';
import { store } from './redux/store';


function App() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.user.user)
  console.log(data)

  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <>
      <h1>Users Data</h1>

      <div style={{ display: "flex", gap: "20px" ,flexWrap:"wrap"}}>
        {
          data.map((item) => <div style={{ border: "1px solid black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" ,padding:"20px",borderRadius:"20px",}} key={item.id}>
            <img style={{ filter: "drop-shadow(-10px 10px 30px blue ", borderRadius: "50%" }} src={item?.avatar} alt={item?.first_name} />
            <h3>{`${item?.first_name} ${item?.last_name}`}</h3>
            <h4>{item?.email}</h4>
          </div>)
        }
      </div>
      <Counter/>
    </>
  )
}

export default App
