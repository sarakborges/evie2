import { FC, useEffect, ReactNode, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { ProfileMock } from '@/Assets/Mocks/Profile.mock'

import { UserContext, UserProfileContext } from '@/Contexts'

import { ROUTES } from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'

import { TopbarOrganism } from '@/Components/Organisms'

import * as Styled from './Authed.style'

export const AuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  const { userState } = useContext(UserContext)
  const { setUserProfileState } = useContext(UserProfileContext)

  useEffect(() => {
    document.title = `${SITE_TITLE}${
      ROUTES.get(location.pathname.replace('/', '').toUpperCase() || 'HOME')
        .TITLE
    }`
  }, [location])

  useEffect(() => {
    setUserProfileState(ProfileMock)
  }, [userState])

  return (
    <Styled.AuthedLayout>
      <TopbarOrganism />

      <>{children}</>
    </Styled.AuthedLayout>
  )
}
