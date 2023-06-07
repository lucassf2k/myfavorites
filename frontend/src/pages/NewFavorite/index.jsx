import { Form } from "../../components/Form"
import { Page } from "../../components/Page"

export function NewFavorite() {
  return (
    <Form.Container>
      <Page.Header title="Novo favorito" />
      <Form.Input placeholder="Nome" />
      <Form.Select>
        <option value="123">Anime</option>
        <option value="123">Anime</option>
        <option value="123">Anime</option>
        <option value="123">Anime</option>
      </Form.Select>
      <Form.Button type="button">Cadastrar</Form.Button>
      <Form.Button type="button" disabled>
        Cadastrar
      </Form.Button>
    </Form.Container>
  )
}
