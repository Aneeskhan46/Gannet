import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Navbar from './nav'


//install this " npm install bootstrap" and import this for working with bootstrap "css and js"
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ css

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ js


import { createBrowserRouter, RouterProvider} from "react-router";
import Home from './home/home.jsx'
import About from './about.jsx'

import Shoes from './home/shoes.jsx'
import Bags from './home/bags.jsx'
import Footer from './footer.jsx'
import Contact from './contact.jsx'


let router = createBrowserRouter([

  { path:"/" , element :( <>  <Navbar/> <Home/> <Footer/> </>),

     children: [
      { index: true, element: <Shoes /> },         // 👈 default for /Post route
      // { path: 'Post1', element: <Post1 /> },
      { path: '/bags', element: <Bags /> },   // for /Post/Post2
    
    ],

},

   { path:"/About" , element :<> <Navbar/> <About/> <Footer/> </> },
  
   { path:"/Contact" , element :<> <Navbar/> <Contact/> <Footer/> </> },
  
 
 
    
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <RouterProvider router={router} />
  </StrictMode>,
)
