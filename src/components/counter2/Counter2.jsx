import { Button } from 'bootstrap';
import React, { useState } from 'react'






const Counter2 = ({addCount, counter, isPending}) => {
  return (
    <div><h2>Counter2</h2>
           <h3  onClick={()=>addCount()}>Counter : {counter}</h3>
           {isPending && 
           <span>updating counter...</span> 
           
           }
    </div>
       ) 
}

export default Counter2
