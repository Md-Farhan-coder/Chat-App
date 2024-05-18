// src/App.js
import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css'
import ChatRoom from './ChatRoom.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Home from './Home.jsx';
import C from './c.jsx';


function App() {
  const route = createBrowserRouter([
    {
       path:"/",
      element: <Home/>,
    },
    {
      path:"/preview",
     element: <C/>,
   },
    {
      path:"/login",
      element: <Login/>,
    },
    {
      path:"/register",
      element: <Register/>,
    },
    {
      path:"/chat",
      element: <ChatRoom/>,
    }
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
 
}

export default App;
