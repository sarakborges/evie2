import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'
import { AppProvider, UserProfileProvider, UserProvider } from '@/Contexts'

import * as Styled from '@/Assets/Styles/Global'

const RenderProviders: FC<{ children?: ReactNode }> = ({ children }) => {
  const providersList = [AppProvider, UserProvider, UserProfileProvider]

  let ret = <>{children}</>

  for (let ProviderItem of providersList) {
    ret = <ProviderItem>{ret}</ProviderItem>
  }

  return ret
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Styled.GlobalStyle />

    <RenderProviders>
      <RouterProvider
        router={createBrowserRouter(
          [...ROUTES.values()].map((routeItem) => ({
            path: routeItem.PATH,
            element: routeItem.ELEMENT
          }))
        )}
      />
    </RenderProviders>
  </React.StrictMode>
)
