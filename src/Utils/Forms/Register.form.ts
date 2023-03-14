import { GenericFormStepsProps } from '@/Utils/Props'
import { SITE_TITLE } from '../Texts'

export const REGISTER_FORM: GenericFormStepsProps = {
  ERROR: `All required fields need to be filled before we can advance.`,

  STEPS: [
    {
      TEXT: `Welcome to ${SITE_TITLE}!
      
      To create your account, we need you to tell us a bit about yourself. Don't worry, it won't take long.`,

      ADVANCE_TEXT: `Advance`
    },

    {
      TEXT: `First off. The most important stuff. This is only used by us to communicate with you. Other users can't see any of this.`,
      RETURN_TEXT: `Previous step`,
      ADVANCE_TEXT: `Next step`,

      FIELDS: [
        {
          ID: `register_name`,
          TYPE: `text`,
          LABEL: `How should we call you?`,
          PLACEHOLDER: `The name you identify yourself`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`
        },

        {
          ID: `register_gender`,
          TYPE: `select`,
          LABEL: `Your pronouns`,
          PLACEHOLDER: `The way you identify yourself`,
          OPTIONS: ['He/him', 'She/her', 'They/them'],
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`
        }
      ]
    },

    {
      TEXT: `Alright, [register_name]! Great to know you! Now, we will need you to input your login info.`,
      RETURN_TEXT: `Previous step`,
      ADVANCE_TEXT: `Next step`,

      FIELDS: [
        {
          ID: `register_email`,
          TYPE: `text`,
          LABEL: `Your email`,
          PLACEHOLDER: `user@email.com`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
          HELP_TEXT: `This is used to log into, redefine password, and other communications by our team.`
        },

        {
          ID: `register_password`,
          TYPE: `password`,
          LABEL: `Your password`,
          PLACEHOLDER: `Very secure password`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`
        },

        {
          ID: `register_confirm_password`,
          TYPE: `password`,
          LABEL: `Confirm your password`,
          PLACEHOLDER: `Repeat that same very secure password`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`
        }
      ]
    },

    {
      TEXT: `Now, we need to create your profile.`,
      RETURN_TEXT: `Previous step`,
      SUBMIT_TEXT: `Create your account`,

      FIELDS: [
        {
          ID: `register_profile_name`,
          TYPE: `text`,
          LABEL: `Name displayed on your profile`,
          PLACEHOLDER: `[The way you want people to know you]`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
          DEFAULT_VALUE: `[register_name]`
        },

        {
          ID: `register_profile_url`,
          TYPE: `text`,
          LABEL: `Profile tag <Use only letters and numbers>`,
          PLACEHOLDER: `mytag`,
          HELP_TEXT: `Your @, and custom URL. If you leave this empty, it will be based on your profile name.`,
          DEFAULT_VALUE: `{slug}[register_profile_name|register_name]`
        }
      ]
    }
  ]
}
