import styled from "styled-components"
export const Button = styled.button`
  width: 100%;
  height: 5.2rem;
  border: none;
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
`
