import React from 'react'
import "./car.css";
import global from "../../globalCss/global.module.css";

const Car = ({brand, tyre, showPrice,  }) => {
    //showPrice();
    
    function onMouseEnter(){
        alert("You hover");
    }
    let pStyles ={
        color: 'white',
        backgroundColor: 'black',
        padding:'0.5 rem',
        margin: '0.5 rem auto'
    }
  return (
    <div id="Car">
        <h1 style={{color: 'red',borderBottom: '2px solid purple'}}>Hi, I'm a Car My brand is {brand? brand : 'benz'}</h1>
        {/*<p>I run faster with {tyre? tyre : 2} tyres</p>*/}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio cupiditate dolorem mollitia similique quibusdam ipsum vel autem voluptatibus pariatur?</p>
       {tyre && (
                 <p style={pStyles} onMouseEnter={()=> onMouseEnter()}>
                 I ran faster with {tyre} tyres{""}
                 </p>
                 )}

        {showPrice && <button className={global.button}onClick={()=>showPrice()}>View Price</button>}
        <h3>More Details</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil adipisci repellat assumenda ipsa pariatur?</p>
        <p style={pStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam libero enim cumque laboriosam fugit!</p>
    </div>
  )
}

export default Car