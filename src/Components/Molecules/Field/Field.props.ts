import { ComponentPropsWithoutRef } from 'react'

export type FieldMoleculeProps = {
  small?: boolean
  helpText?: string
  label?: string
  warning?: string
  options?: string[]
} & ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'select'> &
  ComponentPropsWithoutRef<'textarea'>
