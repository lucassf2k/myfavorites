import styled from "styled-components"

export const Contaienr = styled.div`
  margin-top: 3.2rem;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    font-size: 2.4rem;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    transition: all 0.2s ease-in;
    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.title};
    }
  }
`
