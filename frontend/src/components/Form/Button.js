import styled, { css } from "styled-components"
export const Button = styled.button`
  height: 5.2rem;
  border: none;
  padding: 0 1.6rem;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
  border-radius: 0.4rem;
  transition: background 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
  &[disabled] {
    background: ${({ theme }) => theme.colors.buttonInactive};
    cursor: default;
  }
  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};
      &:hover {
        background: ${theme.colors.danger.light};
      }
      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`
