import { FC } from 'react'
import { Plus } from 'styled-icons/entypo'

import { ButtonAtom } from '@/Components/Atoms'
import { HighlightsOrganism, PostsListOrganism } from '@/Components/Organisms'
import { AuthedLayout } from '@/Components/Layouts'

import * as Styled from './Home.style'

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
          <HighlightsOrganism />
          <PostsListOrganism />
        </Styled.HomeContent>
      </Styled.HomeTemplate>
    </AuthedLayout>
  )
}
