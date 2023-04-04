import { ComponentPropsWithoutRef } from 'react'

export type FieldMoleculeProps = {
  helpText?: string
  label?: string
  warning?: string
  options?: string[]
} & ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'select'> &
  ComponentPropsWithoutRef<'textarea'>
