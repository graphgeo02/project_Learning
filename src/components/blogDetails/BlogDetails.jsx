import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {
    let {id } = useParams();
    let redir = useNavigate();
  return (
    <div>
        <h2>Blog Details for blog number {id}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus voluptatem dolores corrupti, rerum repellat quos tempora amet fugiat provident ullam eveniet accusantium molestias quam aliquam incidunt. Eos, distinctio voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus voluptatem dolores corrupti, rerum repellat quos tempora amet fugiat provident ullam eveniet accusantium molestias quam aliquam incidunt. Eos, distinctio voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus voluptatem dolores corrupti, rerum repellat quos tempora amet fugiat provident ullam eveniet accusantium molestias quam aliquam incidunt. Eos, distinctio voluptates?</p>
        <div className="btns">
            <button onClick={()=>redir("/blog")}>Back</button>
        </div>
    </div>
  )
}

export default BlogDetails