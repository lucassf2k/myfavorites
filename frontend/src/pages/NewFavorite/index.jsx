import { FavoriteForm } from "../../components/FavoriteForm"
import { Form } from "../../components/Form"
import { Page } from "../../components/Page"

export function NewFavorite() {
  return (
    <Form.Container>
      <Page.Header title="Novo favorito" />
      <FavoriteForm buttonlabel="Cadastrar" />
    </Form.Container>
  )
}
