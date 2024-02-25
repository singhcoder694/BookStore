import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import Create from './Pages/CreateProduct/Create'
import './index.css'
import Update from './Pages/UpdateProduct/Update'
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart'
import Detail from './Pages/Details/Detail'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/update',
    element: <Update />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/details',
    element: <Detail />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
