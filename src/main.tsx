import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Events from 'components/pages/Events'
import Home from 'components/pages/Home'
import Layout from 'components/pages/Layout'
import Login from 'components/pages/LogIn'
import Newsletter from 'components/pages/Newsletter'
// import ProductDetails from 'components/pages/ProductDetails'
import Products from 'components/pages/Products'
import SignUp from 'components/pages/SignUp'

import 'index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      // { path: 'products/:productName', element: <ProductDetails /> },
      { path: 'events', element: <Events /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
