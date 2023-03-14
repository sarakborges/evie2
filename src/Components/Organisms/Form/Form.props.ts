import { ComponentPropsWithoutRef, Dispatch } from 'react'

import { GenericFormProps, GenericFormStepsProps } from '@/Utils/Props'

export interface FormOrganismProps extends ComponentPropsWithoutRef<'form'> {
  form: GenericFormStepsProps
  step?: number
  formState: GenericFormProps
  setFormState: Dispatch<any> | null
  buttonStyles?: 'primary' | 'secondary'
}
