import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'
import { LOGIN_TEXTS, SITE_TITLE } from '@/Utils/Texts'
import { LOGIN_FORM } from '@/Utils/Forms'
import { GenericFormProps } from '@/Utils/Props'

import { TextAtom } from '@/Components/Atoms'
import { FormOrganism } from '@/Components/Organisms'
import { NonAuthedLayout } from '@/Components/Layouts'

import * as Styled from './Login.style'

export const LoginTemplate: FC = () => {
  const [loginFormState, setLoginFormState] = useState<GenericFormProps>({
    step: 0,
    form: [
      {
        id: 'login_email',
        value: '',
        warning: ''
      },

      {
        id: 'login_password',
        value: '',
        warning: ''
      }
    ]
  })

  const handleLoginSubmit = () => {}

  useEffect(() => {
    document.title = `${SITE_TITLE}${ROUTES.get('LOGIN').TITLE}`
  }, [])

  return (
    <NonAuthedLayout>
      <Styled.LoginTemplate>
        <FormOrganism
          form={LOGIN_FORM}
          formState={loginFormState}
          setFormState={setLoginFormState}
          onSubmit={handleLoginSubmit}
        />

        <TextAtom fs="12px" fc="formTextColor" lh={1.6} ta="center">
          <>{LOGIN_TEXTS.TO_REGISTER_PRE}</>

          <Link to={ROUTES.get('REGISTER').PATH}>
            {LOGIN_TEXTS.TO_REGISTER_LINK}
          </Link>

          <>{LOGIN_TEXTS.TO_REGISTER_AFTER}</>
        </TextAtom>
      </Styled.LoginTemplate>
    </NonAuthedLayout>
  )
}
