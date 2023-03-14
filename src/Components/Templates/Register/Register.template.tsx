import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'
import { REGISTER_FORM } from '@/Utils/Forms'
import { GenericFormProps } from '@/Utils/Props'

import { FormOrganism } from '@/Components/Organisms'
import { NonAuthedLayout } from '@/Components/Layouts'

import * as Styled from './Register.style'

export const RegisterTemplate: FC = () => {
  const navigate = useNavigate()

  const [registerFormState, setRegisterFormState] = useState<GenericFormProps>({
    step: 0,
    form: []
  })

  const handleRegisterSubmit = () => {
    navigate(ROUTES.get('LOGIN').PATH)
  }

  useEffect(() => {
    document.title = `${SITE_TITLE}${ROUTES.get('REGISTER').TITLE}`
  }, [])

  return (
    <NonAuthedLayout>
      <Styled.RegisterTemplate>
        <FormOrganism
          form={REGISTER_FORM}
          formState={registerFormState}
          setFormState={setRegisterFormState}
          onSubmit={handleRegisterSubmit}
          step={registerFormState.step}
        />
      </Styled.RegisterTemplate>
    </NonAuthedLayout>
  )
}
