import React, { lazy,Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import AboutClass from "./components/About"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router"
import Contact from "./components/Contact"
import RestaurantCard from "./components/RestaurantCard"
import RestaurantMenu from "./components/RestaurantMenu"


const Grocery=lazy(() => import("./components/Grocery"));// it's create a seperte bundle for grocery
const PageLayout=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
        </>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<PageLayout/>,
        children:[
        {
            path:"/",
            element:<Body/>
        },
        {
        path:"/about",
        element:<AboutClass/>
        },
        {
        path:"/contact",
        element:<Contact/>
        },
        {
        path:"/Grocery",
        element:<Suspense fallback={<h3>loading...</h3>} ><Grocery/></Suspense>
        },
        {
            path:"/restaurantMenu/:resId",
            element:<RestaurantMenu/>
        }
        ]
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);