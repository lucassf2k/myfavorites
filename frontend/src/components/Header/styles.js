import styled from "styled-components"

export const Container = styled.header`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 20rem;
    height: auto;
  }
`

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  input {
    width: 100%;
    background: ${({ theme }) => theme.inputBackground};
    border: none;
    border-radius: 2.5rem;
    height: 5rem;
    outline: 0;
    padding: 0 1.6rem;
    &::placeholder {
      color: ${({ theme }) => theme.placeholderColor};
    }
    &:focus {
      border: 2px solid ${({ theme }) => theme.primary};
    }
  }
`
