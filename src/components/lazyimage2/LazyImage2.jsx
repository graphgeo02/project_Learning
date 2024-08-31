import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';





const LazyImage2 = ({url }) => {
console.count("lazyimage render ")
let [images, setImages] = useState(null);

useEffect(()=>{
    axios.get(url? url : "")
    .then(resp =>{
        // console.log(resp.data)
        setImages(resp.data);
    }).catch(err=>{
        console.error(err);
    })
},[])  
    return (
        <div className='images'>
           { url && (
                <>
                   { 
                      images && images.map(image=>(
                        <LazyLoadImage
                        alt={image.title}
                        height={300}
                        src={image.url} // use normal <img> attributes as props
                        width={300}
                        key={image.id}
                        className='image'
                        />
                      ))
   
                   }
                </>
           )}

           {!url && <span> Please provide urls</span>}
          </div>
            )       

}


export default  React.memo(LazyImage2);