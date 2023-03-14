import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'
import { AppProvider } from '@/Contexts'

import * as Styled from '@/Assets/Styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Styled.GlobalStyle />

    <AppProvider>
      <RouterProvider
        router={createBrowserRouter(
          [...ROUTES.values()].map((routeItem) => ({
            path: routeItem.PATH,
            element: routeItem.ELEMENT
          }))
        )}
      />
    </AppProvider>
  </React.StrictMode>
)
