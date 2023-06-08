import PropTypes from "prop-types"
import ReactDOM from "react-dom"

import { Form } from "../Form"

import * as S from "./styles"

export function Modal({ danger }) {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Título do modal</h1>
        <p>Conteúdo do modal</p>
        <S.Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Form.Button type="button" danger={danger}>
            Deletar
          </Form.Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById("modal-root"),
  )
}

Modal.propTypes = {
  danger: PropTypes.bool,
}
Modal.defaultProps = {
  danger: false,
}
