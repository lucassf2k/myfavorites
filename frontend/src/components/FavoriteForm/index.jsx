import PropTypes from "prop-types"

import { FormGroup } from "../FormGroup"
import { Form } from "../Form"

import * as SC from "./styles"

export function FavoriteForm({ buttonlabel }) {
  return (
    <SC.Form>
      <FormGroup>
        <Form.Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Form.Input placeholder="Avaliação" />
      </FormGroup>
      <FormGroup>
        <Form.Input placeholder="Comentário" />
      </FormGroup>
      <FormGroup>
        <Form.Select>
          <option value="1231">Anime</option>
        </Form.Select>
      </FormGroup>
      <SC.ButtonContainer>
        <Form.Button type="submit">{buttonlabel}</Form.Button>
      </SC.ButtonContainer>
    </SC.Form>
  )
}

FavoriteForm.propTypes = {
  buttonlabel: PropTypes.string.isRequired,
}
