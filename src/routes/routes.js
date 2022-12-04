import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Main from '../layouts/Main';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';

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
        ]
    }
])
