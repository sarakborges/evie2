import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Times } from '@styled-icons/typicons/Times'

import { DropdownMoleculeProps } from './Dropdown.props'

import { TextAtom, ButtonAtom } from '@/Components/Atoms'

import * as Styled from './Dropdown.style'

export const DropdownMolecule = forwardRef<
  {
    toggleDropdown: () => void
  },
  DropdownMoleculeProps
>((dropdownProps, dropdownRef) => {
  const { children, wrapperRef, hasCloseButton, title } = dropdownProps

  const [isOpen, setIsOpen] = useState(false)

  const closeDropdown = () => {
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      !wrapperRef?.current ||
      wrapperRef?.current?.contains(e.target as Node)
    ) {
      return
    }

    closeDropdown()
  }

  useImperativeHandle(
    dropdownRef,

    () => ({
      toggleDropdown
    })
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <Styled.Dropdown isOpen={isOpen}>
      <Styled.Header>
        <TextAtom fw={700}>{title}</TextAtom>

        {hasCloseButton && (
          <Styled.CloseButton>
            <ButtonAtom round onClick={closeDropdown}>
              <Times />
            </ButtonAtom>
          </Styled.CloseButton>
        )}
      </Styled.Header>

      <div>{children}</div>
    </Styled.Dropdown>
  )
})

DropdownMolecule.displayName = 'DropdownMolecule'
