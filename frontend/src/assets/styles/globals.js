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

  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, strong {
    color: ${({ theme }) => theme.titleColor}
  }

  input, textarea, select {
    color: ${({ theme }) => theme.inputColor}
  }

  button {
    cursor: pointer;
  }
`
