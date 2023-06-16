import styled from "styled-components"

export const Container = styled.div`
  margin-top: 3.2rem;
`

export const InputSearchContainer = styled.div`
  width: 100%;
  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.inputBackground};
    border: none;
    border-radius: 2.5rem;
    height: 5rem;
    outline: 0;
    padding: 0 1.6rem;
    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.2rem;
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

export const ListHeader = styled.header`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    span {
      margin-right: 0.8rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
    img {
      width: 2.2rem;
      transform: ${({ orderBy }) =>
        orderBy === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
      transition: transform 0.2s ease-in;
    }
  }
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.inputBackground};
  padding: 1.6rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 1.6rem;
  }
  .infos {
    .favorite-name {
      display: flex;
      align-items: center;
      .favorite-details {
        background: ${({ theme }) => theme.colors.primary.dark};
        color: #1d0017;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.4rem 0.8rem;
        border-radius: 5rem;
        margin-left: 0.8rem;
        font-size: 1.4rem;
        small + small {
          margin-left: 0.4rem;
        }
      }
    }
    h6 {
      color: ${({ theme }) => theme.colors.primary.main};
      margin: 0.8rem 0;
    }
    p {
      width: 100%;
      max-width: 78rem;
      font-size: 1.4rem;
    }
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.8rem;
    a {
    }
    button {
      background: transparent;
      border: none;
    }
  }
`
