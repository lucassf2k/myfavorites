import { ThemeProvider } from "styled-components"

import GlobalStyles from "../../assets/styles/globals"
import defaultTheme from "../../assets/styles/themes/default"

import { Header } from "../Header"
import { Favorites } from "../Favorites"

import * as SC from "./styles"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <SC.Container>
        <Header />
        <Favorites.List />
      </SC.Container>
    </ThemeProvider>
  )
}

export default App
