import { RouteObject } from 'react-router'

import {
  Events,
  Home,
  Layout,
  LogIn,
  Newsletter,
  ProductDetailsPage,
  Products,
  SignUp,
} from 'components/pages'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'products',
        element: <Products />,
      },
      { path: 'products/:id', element: <ProductDetailsPage /> },
      { path: 'events', element: <Events /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'login', element: <LogIn /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
]
export default routes
