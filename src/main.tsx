import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'
import { AppProvider } from '@/Contexts'

import { LoginPage } from '@/Components/Pages'

import * as Styled from '@/Assets/Styles/Global'

const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN.PATH,
    element: <LoginPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Styled.GlobalStyle />

    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
)
