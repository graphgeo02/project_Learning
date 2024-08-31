import React from 'react'
import global from "../../globalCss/global.module.css";
const Cat = () => {
  return (
    <div>
        <h1>Hi! I'm a nice new Cat</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corrupti odio possimus accusantium rem fuga magni ut delectus ullam sapiente perferendis.
        </p>
        <div className="blog">
            <h3>How to create a CSS Module</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eos quod officiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eos quod officiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eos quod officiis.</p>
            <button className={global.button}>Read More</button>
         
        </div>
    </div>
  )
}

export default Cat