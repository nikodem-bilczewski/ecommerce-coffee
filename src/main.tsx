import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from 'App'
import AuthContextProvider from 'contexts/AuthContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
