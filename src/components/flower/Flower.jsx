import React from 'react';
import './flower.scss';

const Flower = () => {
  return (
    <div id="Flower">
         <h2>Hi! I'm a Flower new York</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Consequatur amet commodi omnis praesentium repudiandae obcaecati 
          totam et eius non debitis nesciunt doloremque alias, a harum 
          voluptatem dolorum, deserunt similique veritatis corporis, 
          </p>
         <button>View More</button>
         <h3>Flower Names</h3>
         <div className='flowerNames'>
            <span>Habiscus</span>
            <span>Rose</span>
            <span>Blue flower</span>
            <span>Red flower</span>
            <span>Purple flower</span>
         </div>
    </div>
        
        
  )
}

export default Flower;