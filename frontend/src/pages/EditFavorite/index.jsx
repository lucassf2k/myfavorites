import { FavoriteForm } from "../../components/FavoriteForm"
import { Form } from "../../components/Form"
import { Page } from "../../components/Page"

export function EditFavorite() {
  return (
    <Form.Container>
      <Page.Header title="Editar: Naruto" />
      <FavoriteForm buttonlabel="Salvar alterações" />
    </Form.Container>
  )
}
