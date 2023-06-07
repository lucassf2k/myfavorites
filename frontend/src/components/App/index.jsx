import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import GlobalStyles from "../../assets/styles/globals"
import defaultTheme from "../../assets/styles/themes/default"

import { Header } from "../Header"
import { Routes } from "../../routes"

import * as SC from "./styles"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <SC.Container>
          <Header />
          <Routes />
        </SC.Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
