import { RouteObject } from 'react-router'

import Events from 'components/pages/Events'
import Home from 'components/pages/Home'
import Layout from 'components/pages/Layout'
import Login from 'components/pages/LogIn'
import Newsletter from 'components/pages/Newsletter'
// import ProductDetails from 'components/pages/ProductDetails'
import Products from 'components/pages/Products'
import SignUp from 'components/pages/SignUp'

const routes: RouteObject[] = [
  {
    path: '*',
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
]
export default routes
