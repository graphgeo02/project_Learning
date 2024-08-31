import React from 'react'
import { Link, Route } from 'react-router-dom'
import './nav.scss'

import {  Routes } from "react-router-dom"
import { AppRoutes } from '../routesData.jsx'
import { useRecoilValue } from 'recoil'
import { atomCart, selectorBy5 } from '../../atomcart/atom.jsx'
import { cartEvenOrOdd } from '../../atomcart/atom.jsx'
const Nav = () => {
    let cart2 = useRecoilValue(atomCart)
    let evenOdd = useRecoilValue(cartEvenOrOdd)
    let cartBy5 = useRecoilValue(selectorBy5)
  return <div id="Nav">
        <ul>
            {/*Route step 3*/}
            {/* <li>
                {""}
                <Link to='/'>Home</Link>{""}
                </li>
            <li>
                {""}
                <Link to='/car'>Car</Link>{""}
                </li>
            <li>
                {""}
                <Link to='/cat'>Cat</Link>{""}
                </li>
            <li>
                {""}
                <Link to='/flower'>Flower</Link>{""}
                </li>
            <li>
                {""}
                <Link to='/lists'>List</Link>{""}
                </li> */}

                {AppRoutes.map((route)=>{
                    return(
            
                            
                                <li style={{display: route.navName === "null"? "none": "flex"}} key={route.id}>
                                  <Link to={route.path}>{route.navName}</Link>
                                </li>
                          
                       
                    )
                })

                }
                <li style={{color:'white'}}>
                    Cart [{cart2}] | {evenOdd} | {cartBy5}
                </li>
        </ul>

    </div>
  
}

export default Nav