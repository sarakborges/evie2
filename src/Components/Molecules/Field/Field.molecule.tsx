import { FC, useState } from 'react'
import { Eye, EyeOff } from '@styled-icons/heroicons-solid'
import { Question } from '@styled-icons/bootstrap/Question'

import { FieldMoleculeProps } from './Field.props'

import { ButtonAtom } from '@/Components/Atoms/Button'

import * as Styled from './Field.style'

export const FieldMolecule: FC<FieldMoleculeProps> = ({
  helpText,
  label,
  warning,
  options,
  ...props
}) => {
  const { id, type, placeholder } = props

  const [displayPassword, setDisplayPassword] = useState(false)

  const toggleDisplayPassword = () => {
    setDisplayPassword(!displayPassword)
  }

  return (
    <Styled.FieldWrapper>
      {warning && <Styled.Warning htmlFor={id}>{warning}</Styled.Warning>}

      {type === 'password' && (
        <>
          <ButtonAtom onClick={toggleDisplayPassword} transparent>
            {displayPassword ? <EyeOff /> : <Eye />}
          </ButtonAtom>

          <input {...props} type={displayPassword ? 'text' : 'password'} />
        </>
      )}

      {type === 'select' && (
        <select {...props}>
          <option value="" disabled>
            {placeholder}
          </option>

          {options?.map((optionItem: string) => {
            return (
              <option key={optionItem} value={optionItem}>
                {optionItem}
              </option>
            )
          })}
        </select>
      )}

      {type !== 'select' && type !== 'password' && (
        <input {...props} type={type || 'text'} />
      )}

      {id && (
        <Styled.Label htmlFor={id}>
          <>{label}</>

          {helpText && (
            <Styled.Help>
              <Styled.HelpIcon>
                <Question />
              </Styled.HelpIcon>

              <Styled.HelpText>{helpText}</Styled.HelpText>
            </Styled.Help>
          )}
        </Styled.Label>
      )}
    </Styled.FieldWrapper>
  )
}
