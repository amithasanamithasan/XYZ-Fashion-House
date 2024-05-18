import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Path from './Components/Path/Path';
import Home from './Components/Home/Home';

import Shop from './Components/Shop/Shop';






import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivetRoute from './Router/PrivetRoute';
import Userprofile from './Components/UserProfile/Userprofile';
import Dashboard from './Components/Dashboard/Dashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Path></Path>,
    children:[
      {
        path:"/home",
        element:<Home></Home>,

      },
      {
        path:"/shop",
        element:<PrivetRoute><Shop></Shop></PrivetRoute>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
    {
      path:"/login",
      element:<Login></Login>,

    },
    {
      path:"/register",
      element:<Register></Register>,
    },
    {
      path:"/profile",
      element:<PrivetRoute><Userprofile></Userprofile></PrivetRoute>,
    },
    {
    path:"/dashboard",
     element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>
    }
     
   

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
 
  </React.StrictMode>,
)