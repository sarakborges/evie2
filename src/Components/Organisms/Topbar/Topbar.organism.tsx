import { FC } from 'react'
import { Menu } from 'styled-icons/boxicons-regular'

import { ButtonAtom } from '@/Components/Atoms'

import * as Styled from './Topbar.style'

export const TopbarOrganism: FC = () => {
  return (
    <Styled.Topbar>
      <ButtonAtom transparent round>
        <Menu />
      </ButtonAtom>
    </Styled.Topbar>
  )
}
