import * as SC from "./styles"
import logoSVG from "../../assets/images/logo.svg"

export function Header() {
  return (
    <SC.Container>
      <img src={logoSVG} alt="Logo escrito MyFavorites" />
      <SC.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </SC.InputSearchContainer>
    </SC.Container>
  )
}
