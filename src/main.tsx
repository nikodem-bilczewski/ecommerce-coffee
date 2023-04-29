import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'index.css'
import Layout from 'components/pages/Layout'
import Home from 'components/pages/Home'
import Products from 'components/pages/Products'
import ProductDetails from 'components/pages/ProductDetails'
import Events from 'components/pages/Events'
import Newsletter from 'components/pages/Newsletter'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productName', element: <ProductDetails /> },
      { path: 'events', element: <Events /> },
      { path: 'newsletter', element: <Newsletter /> },
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
