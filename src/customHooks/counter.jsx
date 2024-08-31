import React, { useState } from 'react'

const useCounter = () => {
    let [count, setCount] = useState(0);
    
    function addCount(){
        setCount((count += 1))
    }

 function reduceCount(){
    if(!(count <= 0)){
      setCount((count -= 1))
    }
    
 }
  return {
    count,
    addCount,
    reduceCount
  }
    
  
}

export default useCounter;