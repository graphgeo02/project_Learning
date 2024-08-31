import React, { useState } from 'react'
import { fruitList } from './listData'
import './list.css';
import ConfirmModal from '../confirmModal/ConfirmModal';
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = () => {
let [fruits, setFruits] = useState(fruitList)
let [showModal, setShowModal] = useState(false);
const notify = (a) => toast(a,
  {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    //transition: Bounce,
    }
);
const dismissAll = () =>  toast.dismiss();

function addFruit(a){
  setFruits([...fruits, {id: fruits.length, text: a}])
console.log(a);
}
function removeFruit(a){
  notify('Deleting...')
  setTimeout(()=>{
    dismissAll();
    notify('Fruit Deleted successfully!')
    let upd = fruits.filter((each) => each.text.toLowerCase() !=a.toLowerCase());
    console.log(upd);
    setFruits(upd);
  }, 1000 *3);
 
 
}
  return (
    <div align='center'>
         <h2>My favorite fruits</h2>
          <ol>
             {/* <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
            <li>Pineapple</li>
            <li>Coconut</li>
            <li>Carrot</li> */}
             {
                fruits.map((fruits)=>{
                    return (
                        <li key={fruits.id}>{fruits.text}</li>
                    )
                })
             }
            </ol>
              <button onClick={()=>addFruit('grap')}><FaPlus style={{color:'green', fontSize:'2.5rem', marginRight:'1rem'}}/> fruit</button>   
              <button onClick={()=>setShowModal(true)}><RiDeleteBin2Fill style={{color: 'red', fontSize: '2.5rem'}} /> fruit</button> 
              <ConfirmModal 
              action={removeFruit}
              msg={'Sure you want to remove a fruit'}
              setShowModal={setShowModal}
              showModal={showModal}
              actionProps={{ a: fruits[fruits.length -1].text }}
              /> 
               <ToastContainer />
    </div>
  )
}

export default List 