import styled from 'styled-components'

interface FieldWrapperProps {
  small?: boolean
}
export const FieldWrapper = styled.div<FieldWrapperProps>`
  display: flex;
  flex-flow: column-reverse;
  gap: 4px;

  position: relative;

  width: 100%;

  > button {
    position: absolute;
    right: 0;
    bottom: 1px;

    height: 31px;
    aspect-ratio: 1;

    & + :is(input, select) {
      padding-right: 31px;
    }
  }

  > :is(input, select, textarea) {
    height: ${({ small }) => (small ? '24px' : '32px')};

    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--formFieldBorder);

    font-size: ${({ small }) => (small ? '12px' : '16px')};
    color: var(--formTextColor);

    transition: background-color 0.3s, border-color 0.3s;

    &:focus {
      background-color: var(--formFocusBackgroundColor);
    }

    &:-webkit-autofill,
    &:autofill {
      background: none;
    }

    > option {
      color: var(--formTextColor);
    }
  }

  > :is(textarea) {
    height: 120px;
    resize: none;
    padding: 8px;

    background-color: var(--formTextareaBackgroundColor);

    &:focus {
      background-color: var(--formTextareaFocusBackgroundColor);
    }
  }
`

export const Label = styled.label`
  display: flex;
  place-items: center;
  gap: 4px;

  font-size: 12px;
  line-height: 1.4;
  color: var(--formTextColor);

  transition: color 0.3s;
`

export const Warning = styled.label`
  color: var(--warningTextColor);
  font-size: 12px;

  & + :is(input, select),
  & + button + :is(input, select) {
    background-color: var(--warningBgColor);
    border-color: var(--warningTextColor);

    + label {
      color: var(--warningTextColor);
    }
  }

  & + button {
    top: 22px;
  }

  & + button + :is(input, select) {
    border-color: var(--warningTextColor);
  }
`

export const Help = styled.div`
  position: relative;

  color: var(--grayLight);
`

export const HelpIcon = styled.div`
  display: flex;
  place-items: center;
  place-content: center;

  width: 20px;
  aspect-ratio: 1;

  border-radius: 50%;
  background-color: var(--mainMedium);
`

export const HelpText = styled.div`
  display: flex;

  position: absolute;
  left: calc(100% + 4px);
  top: -8px;
  z-index: 1;

  width: 280px;
  padding: 8px;

  border-radius: 4px;
  background-color: var(--mainMedium);

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.3s, visibility 0.3s;

  ${Help}:hover > & {
    opacity: 1;
    visibility: visible;
  }
`
