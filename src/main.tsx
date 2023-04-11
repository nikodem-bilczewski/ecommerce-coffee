import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Events from './pages/Events'
import HomePage from './pages/Home'
import Products from './pages/Products'
import Root from './pages/Root'
import Newsletter from './pages/Newsletter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <Products /> },
      { path: 'events', element: <Events /> },
      { path: 'newsletter', element: <Newsletter /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
