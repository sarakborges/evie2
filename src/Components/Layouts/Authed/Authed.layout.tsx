import { FC, useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'

import * as Styled from './Authed.style'

export const AuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    document.title = `${SITE_TITLE}${
      ROUTES.get(location.pathname.replace('/', '').toUpperCase() || 'HOME')
        .TITLE
    }`
  }, [location])

  return (
    <Styled.AuthedLayout>
      <>{children}</>
    </Styled.AuthedLayout>
  )
}
