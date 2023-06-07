import { ThemeProvider } from "styled-components"

import GlobalStyles from "../../assets/styles/globals"
import defaultTheme from "../../assets/styles/themes/default"

import { Header } from "../Header"
import { Routes } from "../../routes"

import * as SC from "./styles"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <SC.Container>
        <Header />
        <Routes />
      </SC.Container>
    </ThemeProvider>
  )
}

export default App
