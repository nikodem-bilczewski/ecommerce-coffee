import { RouteObject } from 'react-router'

import {
  Checkout,
  Events,
  Home,
  Layout,
  LogIn,
  Newsletter,
  OrderDetailsPage,
  ProductDetailsPage,
  Products,
  SignUp,
  UserProfile,
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
      { path: 'user', element: <UserProfile /> },
      { path: 'user/orders/:id', element: <OrderDetailsPage /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
]
export default routes
