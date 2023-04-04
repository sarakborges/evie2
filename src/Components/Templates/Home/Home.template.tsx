import { FC } from 'react'
import { Plus } from 'styled-icons/entypo'

import { ButtonAtom } from '@/Components/Atoms'
import { AuthedLayout } from '@/Components/Layouts'

import * as Styled from './Home.style'
import { StoriesOrganism } from '@/Components/Organisms'

export const HomeTemplate: FC = () => {
  return (
    <AuthedLayout>
      <Styled.HomeTemplate>
        <Styled.FloatingPublishButton>
          <ButtonAtom round>
            <Plus />
          </ButtonAtom>
        </Styled.FloatingPublishButton>

        <Styled.HomeContent>
          <StoriesOrganism />
        </Styled.HomeContent>
      </Styled.HomeTemplate>
    </AuthedLayout>
  )
}
