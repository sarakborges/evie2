import { FC, useContext } from 'react'
import { Menu } from 'styled-icons/boxicons-regular'

import { UserProfileContext } from '@/Contexts'

import { ROUTES } from '@/Utils/Constants'

import { ButtonAtom, PictureAtom, TextAtom } from '@/Components/Atoms'

import * as Styled from './Topbar.style'

export const TopbarOrganism: FC = () => {
  const { userProfileState } = useContext(UserProfileContext)

  return (
    <Styled.Topbar>
      <ButtonAtom secondary round>
        <Menu />
      </ButtonAtom>

      <TextAtom fs="20px" fw={400} fc="text">
        {
          ROUTES.get(location.pathname.replace('/', '').toUpperCase() || 'HOME')
            .HEADER
        }
      </TextAtom>

      <ButtonAtom transparent round nopad>
        <PictureAtom
          src={userProfileState.picture}
          alt={userProfileState.name}
          w={40}
          squared
        />
      </ButtonAtom>
    </Styled.Topbar>
  )
}
