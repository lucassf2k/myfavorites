import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import arrowIcon from "../../../assets/images/icons/arrow.svg"
import * as SC from "./styles"

export function Header({ title }) {
  return (
    <SC.Container>
      <h1>{title}</h1>
      <Link to="/">
        <img src={arrowIcon} alt="Ícone de seta para a esquerda" />
        <span>Voltar</span>
      </Link>
    </SC.Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
