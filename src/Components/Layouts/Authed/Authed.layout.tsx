import { FC, ReactNode } from 'react'

import * as Styled from './Authed.style'

export const AuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Styled.AuthedLayout>
      <>{children}</>
    </Styled.AuthedLayout>
  )
}
