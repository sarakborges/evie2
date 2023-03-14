import { SITE_TITLE } from '@/Utils/Texts'
import { GenericFormStepsProps } from '@/Utils/Props'

export const LOGIN_FORM: GenericFormStepsProps = {
  ERROR: `All required fields need to be filled before we can advance.`,

  STEPS: [
    {
      TEXT: `Welcome back to ${SITE_TITLE}!`,
      SUBMIT_TEXT: `Log in`,

      FIELDS: [
        {
          ID: `login_email`,
          TYPE: `text`,
          LABEL: `Your account email`,
          PLACEHOLDER: `email@provider.com`,
          REQUIRED: true,
          REQUIRED_ERROR: `Your email is required to login.`
        },

        {
          ID: `login_password`,
          TYPE: `password`,
          LABEL: `Your account password`,
          PLACEHOLDER: `!#0%&g8#4&A`,
          REQUIRED: true,
          REQUIRED_ERROR: `Your password is required to login.`
        }
      ]
    }
  ]
}
