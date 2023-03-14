import { FC, ReactNode } from 'react'

import * as Styled from './NonAuthed.style'

export const NonAuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Styled.NonAuthedLayout>
      <>{children}</>
    </Styled.NonAuthedLayout>
  )
}
