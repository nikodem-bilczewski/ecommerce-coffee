import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import Home from './routes/Home'
import About from './routes/About'
import Products from './routes/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'about', element: <About /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
