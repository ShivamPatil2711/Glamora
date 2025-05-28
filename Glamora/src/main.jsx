import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {RouterProvider, createBrowserRouter} from"react-router-dom"
import Bag from './components/Bag.jsx'
import Home from './routes/Home.jsx'
import Myntrastore from '../store/index.js';
import {Provider} from "react-redux";
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home></Home>,
    },
    {
      path:"/bag",
      element:<Bag></Bag>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Myntrastore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
 
  </StrictMode>,
)
