import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Resgister from '../Pages/Resgister';
import HomeLayout from '../layouts/HomeLayout';
import News from '../Pages/News';
import ProfileLayout from '../layouts/ProfileLayout';
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
        path: '/profile',
        element: <ProfileLayout />
    },
]);