import { ChangeEvent, FC, FormEvent, useEffect } from 'react'

import { FormItemProps } from '@/Utils/Props'

import { ButtonAtom, TextAtom } from '@/Components/Atoms'
import { FieldMolecule } from '@/Components/Molecules'

import { FormOrganismProps } from './Form.props'

import * as Styled from './Form.style'

export const FormOrganism: FC<FormOrganismProps> = ({
  form,
  formState,
  step = 0,
  buttonStyles = 'primary',
  setFormState,
  onSubmit,
  ...props
}) => {
  const getValue = (id: string) => {
    return (
      formState?.form?.find((formItem) => formItem.id === id)?.value.trim() ||
      ''
    )
  }

  const getWarning = (id: string) => {
    return (
      formState?.form?.find((formItem) => formItem.id === id)?.warning || ''
    )
  }

  const validateForm = () => {
    if (
      form.STEPS[step].FIELDS?.some(
        (fieldItem) =>
          fieldItem.REQUIRED &&
          !formState.form
            .find((formItem) => formItem.id === fieldItem.ID)
            ?.value.trim()
      )
    ) {
      const newRegisterForm = formState.form.map((formItem) => {
        const field = form.STEPS[step].FIELDS?.find(
          (fieldItem) => fieldItem.ID === formItem.id
        )

        return {
          ...formItem,

          warning:
            field?.REQUIRED && !formItem.value ? field?.REQUIRED_ERROR : ''
        }
      })

      setFormState?.({
        ...formState,
        form: [...newRegisterForm]
      })

      return false
    }

    return true
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState?.({
      ...formState,

      form: [
        ...formState?.form?.filter(
          (formItem) => formItem.id !== e.currentTarget.id
        ),

        {
          id: e.currentTarget.id,
          value: e.currentTarget.value,
          warning: ''
        }
      ]
    })
  }

  const advanceStep = () => {
    if (step < form?.STEPS.length - 1 && validateForm()) {
      setFormState?.({
        ...formState,
        step: step + 1
      })
    }
  }

  const returnStep = () => {
    setFormState?.({
      ...formState,
      step: step - 1
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (step === form?.STEPS.length - 1) {
      if (!validateForm()) {
        return
      }

      onSubmit?.(e)
      return
    }

    advanceStep()
  }

  useEffect(() => {
    const newForm: FormItemProps[] = []

    form.STEPS.forEach((stepItem) => {
      stepItem.FIELDS?.forEach((fieldItem) => {
        newForm.push({
          id: fieldItem.ID,
          value: '',
          warning: ''
        })
      })
    })

    setFormState?.({ ...formState, form: [...newForm] })
  }, [])

  return (
    <form {...props} onSubmit={handleSubmit}>
      {!!form.STEPS[step].TEXT && (
        <TextAtom fs="24px" fw={400} lh={1.4} fc="formTextColor">
          {form.STEPS[step].TEXT || ''}
        </TextAtom>
      )}

      {!!form.STEPS[step].FIELDS?.length &&
        form.STEPS[step].FIELDS?.map((registerFormItem) => {
          return (
            <FieldMolecule
              key={registerFormItem.ID}
              id={registerFormItem.ID}
              type={registerFormItem.TYPE}
              label={registerFormItem.LABEL}
              placeholder={registerFormItem.PLACEHOLDER}
              helpText={registerFormItem.HELP_TEXT || ''}
              warning={getWarning(registerFormItem.ID)}
              value={
                getValue(registerFormItem.ID) ||
                registerFormItem.DEFAULT_VALUE ||
                ''
              }
              options={registerFormItem?.OPTIONS || []}
              onChange={handleChange}
            />
          )
        })}

      <Styled.Buttons>
        {step > 0 && form.STEPS[step].RETURN_TEXT && (
          <ButtonAtom
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
            onClick={returnStep}
          >
            {form.STEPS[step].RETURN_TEXT}
          </ButtonAtom>
        )}

        {step < form.STEPS.length && form.STEPS[step].ADVANCE_TEXT && (
          <ButtonAtom
            type="submit"
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
          >
            {form.STEPS[step].ADVANCE_TEXT}
          </ButtonAtom>
        )}

        {step === form.STEPS.length - 1 && form.STEPS[step].SUBMIT_TEXT && (
          <ButtonAtom
            type="submit"
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
          >
            {form.STEPS[step].SUBMIT_TEXT}
          </ButtonAtom>
        )}
      </Styled.Buttons>
    </form>
  )
}
