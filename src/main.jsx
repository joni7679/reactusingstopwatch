import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FontChanger from './FontChanger.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, {
    path: "/fontchanger",
    element: <FontChanger />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
