import { Form } from "../../components/Form"
import { Page } from "../../components/Page"

import * as SC from "./styles"

export function NewFavorite() {
  return (
    <SC.Container>
      <Page.Header title="Novo favorito" />
      <Form.Input placeholder="Nome" />
    </SC.Container>
  )
}
