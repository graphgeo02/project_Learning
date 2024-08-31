import React from 'react'
import '../nav/nav.scss';
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfo } from '../atom/user';

const Blognav = () => {
  let [user, setUser] = useRecoilState(userInfo);
function handleSignout(){
       setUser({isLoggedIn:false, data:{}})
}
  return (
    <div id='Nav'>
        <ul>
            
        <li >
                 <Link to="/">Home</Link>
                 
        </li>
        <li>
                 <Link to="/blog">Blog</Link>
        </li>
       
        <li style={{display: user.data.role != "admin"? "none" : "flex"}}>
                 <Link to="/create">Create Blog</Link>
        </li>
        
        <li style={{display: user.isLoggedIn ? "none" : "flex"}}>
                 <Link to="/signin">Signin</Link>
        </li>
        <li  style={{display: user.isLoggedIn? "none" : "flex"}}>
                 <Link to="/signup">Signup</Link>
        </li>
        <li style={{display: user.isLoggedIn ? "flex" : "none"}} >
                 <Link onClick={()=>handleSignout()}to="/#">Signout</Link>
        </li>
        </ul>

    </div>
  )
}

export default Blognav