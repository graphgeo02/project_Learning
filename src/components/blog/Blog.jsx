
import React from 'react'
import Blognav from '../blogNav/Blognav'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { userInfo } from '../atom/user';
import  { useEffect } from "react";


const Blog = () => {
let redir = useNavigate();
let user = useRecoilValue(userInfo);
useEffect(()=>{
 
if(!user.isLoggedIn){
  redir("/signin");
}
  }, [user.isLoggedIn]);
  return (
    <div>
      <Blognav />
      <h1>All blogs</h1>
    </div>
  )
}

export default Blog