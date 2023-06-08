import styled, { css } from "styled-components"
export const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.inputBackground};
  height: 5.2rem;
  border-radius: 0.4rem;
  outline: none;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  transition: border-color 0.2s ease-in;
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}
`
