import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Resgister from '../Pages/Resgister';
import HomeLayout from '../layouts/HomeLayout';
import News from '../Pages/News';
import ProfileLayout from '../layouts/ProfileLayout';
// import Connection from "../Pages/Connection"
import ERR_404 from '../Pages/404';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },

    {
        path: '/register',
        element: <Resgister></Resgister>
    },

    {
        path: '/home',
        element: <HomeLayout />
    },
    {
        path: '/news',
        element: <News />
    },
    {
        path: `/profile`,//TODO: add path to /profile/user_name
        element: <ProfileLayout />
    },
    // {
    //     path: "/connect",
    //     element: <Connection />
    // },
    {
        path: "*",
        element: <ERR_404 />
    }
]);

