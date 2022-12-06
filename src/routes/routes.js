import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Main from '../layouts/Main';
import AllCourses from '../pages/AllCourses/AllCourses';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Blog from '../pages/Blog/Blog';
import Checkout from '../pages/Checkout/Checkout';
import Courses from '../pages/Courses/Courses';
import CoursesByCategory from '../pages/CoursesByCategory/CoursesByCategory';
import Error from '../pages/Error/Error';
import Faq from '../pages/Faq/Faq';
import Home from '../pages/Home/Home';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/categories'),
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/courses',
                loader:()=>fetch('http://localhost:5000/categories'),
                element:<Courses></Courses>,
                children:[
                    {
                        path:'/courses',
                        loader:async()=>fetch('http://localhost:5000/allcourses'),
                        element:<AllCourses></AllCourses>
                    },
                    {
                        path:'/courses/:id',
                        loader:({params})=>fetch(`http://localhost:5000/allcourses/${params.id}`),
                        element:<CoursesByCategory></CoursesByCategory>
                    }
                ]
            },
           
            {
                path:'/faq',
                loader:async()=>fetch('http://localhost:5000/allcourses'),
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                loader:async()=>fetch('http://localhost:5000/allcourses'),
                element:<Blog/>
            },
            {
                path:'/checkout/:id',
                loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`),
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:'/*',
                element:<Error></Error>
            }
        ]
    }
])
