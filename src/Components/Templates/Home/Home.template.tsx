import { FC } from 'react'

import { AuthedLayout } from '@/Components/Layouts'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <AuthedLayout>
      <Styled.HomeTemplate></Styled.HomeTemplate>
    </AuthedLayout>
  )
}
