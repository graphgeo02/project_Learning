
import {lazy} from "react"
import { Suspense } from "react";
const Form = lazy(() =>import("./form/Form"));
const Blog = lazy(() =>import("./blog/Blog")) ;
const BlogDetails = lazy(() =>import("./blogDetails/BlogDetails"));
const Car = lazy(() =>import("./car/Car"));
const Cat = lazy(() =>import("./cat/Cat"));
const Error = lazy(() =>import("./error/Error"));
const Flower = lazy(() =>import( "./flower/Flower"));
const Home = lazy(() =>import( "./home/Home"));
const List = lazy(() =>import( "./lists/List"));
const Signup = lazy(() =>import("./signup/Signup"));
const Createblog = lazy(() =>import("./createBlog/Createblog"));
const Signin = lazy(() =>import("./signin/Signin"));
const Optimization2 = lazy(() =>import("./optimization2/Optimization2"));
const Hook = lazy(() =>import("./hooks/Hook"));




let id = 0;

export const AppRoutes = [
{
    id: id++,
    path: '/',
    component: <Home />,
    navName: "Home",
},
{
    id: id++,
    path: '/car',
    component: <Car brand="Ford" tyre={4} showPrice={()=>{}}/>,
    navName: "Car",
},
{
    id: id++,
    path: '/cat',
    component: <Cat />,
    navName: "Cat"
},
{
    id: id++,
    path: '/flower',
    component: <Flower />,
    navName: "Flower",
},
{
    id: id++,
    path: '/blog',
    component: < Blog />,
    navName: "Blog",
},
{
    id: id++,
    path: '/blog/:id',
    component: < BlogDetails />,
    navName: "null",
},
// {
//     id: id++,
//     path: '/hooks',
//     component: < Hook />
// },
{
    id: id++,
    path: '/list',
    component: < List />,
    navName: "List",
},
{
    id: id++,
    path: '/form',
    component: < Form />,
    navName: "Form",
},
{
    id: id++,
    path: '/signup',
    component: < Signup />,
    navName: "Signup",
},
{
    id: id++,
    path: '/signin',
    component: < Signin />,
    navName: "Signin",
},
{
    id: id++,
    path: '/create',
    component: < Createblog />,
    navName: "Create",
},
{
    id: id++,
    path: '/optimization2',
    component: < Optimization2 />,
    navName: "Optimization2",
},
{
    id: id++,
    path: '*',
    component: < Error />,
    navName: "null",
},
{
    id: id++,
    path: 'hooks',
    component: < Hook />,
    navName: "Hook",
},

];

