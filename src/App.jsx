
//import './App.css'
import React from 'react';
// import { lazy } from 'react'
// import Car from './components/car/Car'
//  import Flower from './components/flower/Flower'
//  import Cat from './components/cat/Cat'
//  import Home from './components/home/Home'
 import Nav from './components/nav/Nav'
 import Footer from './components/footer/Footer'
//  import Error from './components/error/Error'
//  import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
//  import BlogDetails from './components/blogDetails/BlogDetails'
//  import Blog from './components/blog/Blog'
//  import List from './components/lists/List'
import { Suspense, useState } from 'react';
import { AppRoutes } from './components/routesData'
import { useLocation } from 'react-router-dom'
  // import Optimization2 from './components/optimization2/Optimization2'
//js
function App() {
  let Path = useLocation();
  let noNav = ['/blog', "/signin", "/signup", "/create"];
  //jsn
  //const [count, setCount] = useState(0)

  function showPrice(){
    alert('My price is $200 only')
  }
 
  return (
<>
   {/*
      <p>This is para 1</p>
      <p>This is para 2</p>
      <Car brand="Ford" tyre={4} showPrice={showPrice}/>
      <Car />
      <Cat />
      <Flower />
  */}

  {/*Roter step 2*/}
  {/* <Nav /> */}
   {!noNav.includes(Path.pathname) && <Nav />} 
    <Suspense   fallback={<div>Loading...</div>}>
  <Routes>
    {/* <Route path="/" element={<Home />} />
    <Route path="/car" element={ <Car brand="Ford" tyre={4} showPrice={showPrice} />} />
    <Route path="/cat" element={<Cat />} />
    <Route path="/flower" element={<Flower />} />
    <Route path="/blog/:id" element={<BlogDetails />} />
    <Route path="/blog/" element={<Blog />} />
    <Route path="/blog/" element={<Blog />} />
    <Route path="/lists" element={<List />} /> */}
    {
      AppRoutes.map(route =>{
        return (
              <Route 
              path={route.path} 
              element={route.component} 
              key ={route.id}
              />
        )
      
      })
    }
  </Routes>
          </Suspense>
  <Footer />
    
</>  
    
  )
  //js
}
//js
export default App
