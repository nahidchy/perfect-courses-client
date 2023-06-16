import { createBrowserRouter } from "react-router-dom"
import Main from "../LayOut/Main"
import Home from "../Home/Home"
import Courses from "../Courses/Courses"
import Video from "../Video/Video"
import CourseDetails from "../Course/CourseDetails/CourseDetails"

export const routes=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/courses',
            element:<Courses></Courses>,
            loader:()=>fetch('http://localhost:4000/courses')
        },
        {
            path:'/courses/:id',
            element:<Video></Video>,
            loader:({params})=>fetch(`http://localhost:4000/video/${params.id}`)
        },
        {
            path:'/course/:id',
            element:<CourseDetails></CourseDetails>,
            loader:({params})=>fetch(`http://localhost:4000/course/${params.id}`)
        }
       ]
    }
])