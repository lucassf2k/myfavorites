import styled from "styled-components"

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 0.4rem;
  padding: 2.4rem;
  h1 {
    font-size: 2.2rem;
    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.text};
  }
  p {
    margin-top: 0.8rem;
  }
`

export const Footer = styled.footer`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .cancel-button {
    background: transparent;
    border: none;
    font-size: 1.6rem;
    margin-right: 0.8rem;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`
