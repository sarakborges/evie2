import { FC, useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'

import * as Styled from './NonAuthed.style'

export const NonAuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    document.title = `${SITE_TITLE}${
      ROUTES.get(location.pathname.replace('/', '').toUpperCase()).TITLE
    }`
  }, [location])

  return (
    <Styled.NonAuthedLayout>
      <>{children}</>
    </Styled.NonAuthedLayout>
  )
}
