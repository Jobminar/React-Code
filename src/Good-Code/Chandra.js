import React, { useContext } from 'react'
import { Data } from './RequireAuth';

  const Chandra = () => {

 const contextData = useContext(Data); 

  return (
    <div>
      <h1>Welcome to chandra webpage</h1>
      <p>Name: {contextData.name}</p>
      <p>Array: {contextData.arr.join(', ')}</p>
      <p>Fruits: {contextData.fruits.item}, Price: {contextData.fruits.price}, Quality: {contextData.fruits.quality}</p>
 
    </div>
  )
}

export default Chandra
