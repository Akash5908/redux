import React, { useEffect } from 'react'
import { apiData } from '../actions'
import { useDispatch } from 'react-redux'
const Apidata = () => {
   const dispatch = useDispatch();
   const Fetching = async () => {  
       const res= await fetch('https://random-data-api.com/api/address/random_address?size=3')
       const data = await res.json();
     dispatch(apiData(data[0]))
     console.log(data[0])
   }
    useEffect(() => {
 Fetching()
    }, [])
    
  return (
      <div>
          
    </div>
  )
}

export default Apidata