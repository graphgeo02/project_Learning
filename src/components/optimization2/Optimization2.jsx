import React, { Suspense, useCallback, useMemo, useState, useTransition } from 'react';
import WindowVirtualize from '../windowVitualize/WindowVirtualize';
// import LazyImage2 from '../lazyimage2/LazyImage2';
import "./optimization2.scss"
// import Counter2 from '../counter2/Counter2';
const Counter2 = React.lazy(()=>import ('../counter2/Counter2') );
const LazyImage2 = React.lazy(()=> import('../lazyimage2/LazyImage2'));
import debounce from 'debounce';
import { lazy } from 'react';
import { useRecoilState } from 'recoil';
import { atomCart } from '../../atomcart/atom';
import { Image, Transformation } from 'cloudinary-react';


const Optimization2 = () => {
  let [counter, setCounter] = useState(0);
  let [cart, setCart] = useState(0);
  let [search, setSeach] = useState('')
 let [isPending, startTransition] = useTransition();
 let [cart2, setCart2] = useRecoilState(atomCart)
 // Memoize addCount function

 
 const addCount = () => {
startTransition(()=>{
  setCounter(prevCounter => prevCounter + 1); 
})

  
} ;
  
  console.count('Optimization2 render: ');

  function getCountPower(){ 
    return cart ** cart;
     
  }
  
    let AddCount = useCallback(addCount, [counter])


   let memoPower = useMemo(getCountPower, [cart]);
   
  function handleSearch(){
    console.log(search)
  }
 
  return (
   <div id="Optimization2">
      <h2>Optimization2</h2>
      <fieldset>
        <label htmlFor='search'>Search</label>
        <input type="search"  
        name='search' 
        id='search' 
        placeholder=' Search this web site...'
        value={search}
        onChange={(e)=> setSeach(e.target.value)}
        onKeyUp={ debounce(handleSearch, 1000 * 30)}
        />
      </fieldset>
      <Image
      cloudName="Abdullahi" 
      publicId="https://res.cloudinary.com/dypjjbe0h/image/upload/v1723039120/reacticon_prdz06.png">
           <Transformation crop="scale" width="200" angle="10" />
      </Image>
      <h3>
      {" "}
      {cart} has a power of {memoPower} {" "}
      <button onClick={()=>setCart(cart += 1)}>cart++</button>
      <button onClick={()=>setCart2((prevValue)=>prevValue + 1)}> add to Cart</button>
      
      </h3>
      <div id="Line1">
      <WindowVirtualize />
      </div>
     <Suspense fallback={<div>Loading Counter...</div>}>
       <Counter2 addCount={AddCount} isPending={isPending}  counter={counter} />
     </Suspense>
      
      <Suspense fallback={<div>Loading Image...</div>}>
      <div id="Line2" className='images'>
      <LazyImage2  url={ "https://jsonplaceholder.typicode.com/photos" }/>
      </div>
      </Suspense>
    </div>
  );
};

export default Optimization2;
