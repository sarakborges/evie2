export type FormIdsType =
  | 'register_name'
  | 'register_email'
  | 'register_password'
  | 'register_confirm_password'
  | 'register_gender'
  | 'login_email'
  | 'login_password'
  | 'register_profile_name'
  | 'register_profile_url'

export interface FieldsProps {
  ID: FormIdsType
  TYPE: 'text' | 'password' | 'select'
  LABEL: string
  PLACEHOLDER: string
  OPTIONS?: string[]
  REQUIRED?: boolean
  REQUIRED_ERROR?: string
  HELP_TEXT?: string
  DEFAULT_VALUE?: string
}

export interface FormItemProps {
  id: FormIdsType
  value: string
  warning: string
}

export interface GenericFormProps {
  step: number
  form: FormItemProps[]
}

export interface GenericFormStepsProps {
  ERROR?: string

  STEPS: {
    TEXT?: string
    ADVANCE_TEXT?: string
    RETURN_TEXT?: string
    SUBMIT_TEXT?: string

    FIELDS?: FieldsProps[]
  }[]
}
