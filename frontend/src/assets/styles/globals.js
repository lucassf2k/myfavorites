import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sora", sans-serif;
  }

  ::-webkit-scrollbar {
    background: transparent;
    width: 8px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.inputBackground};
    border-radius: 8px;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, strong {
    color: ${({ theme }) => theme.colors.title}
  }

  input, textarea, select {
    color: ${({ theme }) => theme.colors.input};
  }

  button {
    cursor: pointer;
  }
`
