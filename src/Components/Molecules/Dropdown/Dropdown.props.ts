import { ReactNode, RefObject } from 'react'

export interface DropdownMoleculeProps {
  title?: string
  children: ReactNode
  wrapperRef: RefObject<HTMLDivElement>
  hasCloseButton?: boolean
}
