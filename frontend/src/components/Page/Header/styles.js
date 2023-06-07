import styled from "styled-components"

export const Container = styled.header`
  margin-bottom: 2.4rem;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      width: 2.2rem;
      margin-right: 0.8rem;
      transform: rotate(-90deg);
    }
    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
  h1 {
    font-size: 2.4rem;
  }
`
