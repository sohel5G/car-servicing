import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import LogIn from "../pages/login/LogIn.jsx";
import Register from "../pages/register/Register.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import Profile from "../dashboard/Profile.jsx";
import DashboardContent from "../dashboard/DashboardContent.jsx";
import PrivateRoute from "../privateRoute/PrivateRoute.jsx";
import ServiceDetails from "../pages/home/ServiceDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path:'/dashboard',
                        element: <DashboardContent></DashboardContent>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <PrivateRoute> <Profile></Profile> </PrivateRoute> 
                    }
                ]
            }
        ]
    },
]);

export default router;
