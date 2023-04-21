import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum,mulNum } from './actions/index';
import Text from './component/text';
import ApiData from './data/Apidata'

const App = () => {
  
  const myState = useSelector((state) => state.changeTheNumber);
  const myApi = useSelector((state) => state.changeTheApi);
  const dispatch = useDispatch();
  return (
    <>
      
    <ApiData/>
    <div style={{
      
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center'
      }}>
        <Text/>
      <button onClick={()=> dispatch(mulNum(2))}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(incNum(4))}>+</button>
      </div>
      <h1 style={{fontSize: '20px' , margin: 'auto'}}>{myApi.description}</h1>
    </>
  )
}

export default App