import { createBrowserRouter } from "react-router-dom";
import Applayout from "../layouts/applayouts"
import Home from "../pages/home";
import About from "../pages/about";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            }, {
                path: '/about',
                element: <About />
            }
        ]
    }
])

