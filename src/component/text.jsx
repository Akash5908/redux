import React from 'react'
import { useSelector } from 'react-redux';
const Text = () => {
  const myApi = useSelector((state) => {
    return state.changeTheApi,
   
  });
  
  return (
    <div>
      {myApi.map(items){
        <h1>itm</h1>
      }}
          
    </div>
  )
}

export default Text