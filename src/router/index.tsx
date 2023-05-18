import { RouteObject } from 'react-router'

import {
  Events,
  Home,
  Layout,
  LogIn,
  Newsletter,
  Products,
  SignUp,
} from 'components/pages'

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
      { path: 'login', element: <LogIn /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
]
export default routes
