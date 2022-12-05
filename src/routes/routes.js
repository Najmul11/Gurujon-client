import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Main from '../layouts/Main';
import AllCourses from '../pages/AllCourses/AllCourses';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Blog from '../pages/Blog/Blog';
import Courses from '../pages/Courses/Courses';
import Faq from '../pages/Faq/Faq';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
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
                        element:<AllCourses></AllCourses>
                    }
                ]
            },
           
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
        ]
    }
])
