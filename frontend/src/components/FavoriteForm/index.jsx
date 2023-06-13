import { useState } from "react"
import PropTypes from "prop-types"

import { FormGroup } from "../FormGroup"
import { Form } from "../Form"

import { useErrors } from "../../hooks/useErrors"

import * as S from "./styles"

export function FavoriteForm({ buttonlabel }) {
  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [note, setNote] = useState("")
  const [category, setCategory] = useState("")
  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange(event) {
    setName(event.target.value)
    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório." })
    } else {
      removeError("name")
    }
  }

  function handleRatingChange(event) {
    setRating(event.target.value)
    if (event.target.value.length > 15) {
      setError({ field: "rating", message: "No máximo 15 caracteres." })
    } else {
      removeError("rating")
    }
  }

  function handleSumit(event) {
    event.preventDefault()
    console.log({
      name,
      rating,
      note,
      category,
    })
  }

  return (
    <S.Form onSubmit={handleSumit}>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Form.Input
          type="email"
          error={getErrorMessageByFieldName("name")}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName("rating")}>
        <Form.Input
          error={getErrorMessageByFieldName("rating")}
          placeholder="Avaliação"
          value={rating}
          onChange={handleRatingChange}
        />
      </FormGroup>
      <FormGroup>
        <Form.Input
          placeholder="Comentário"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Form.Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="animation">Animação</option>
          <option value="film">Filme</option>
        </Form.Select>
      </FormGroup>
      <S.ButtonContainer>
        <Form.Button type="submit">{buttonlabel}</Form.Button>
      </S.ButtonContainer>
    </S.Form>
  )
}

FavoriteForm.propTypes = {
  buttonlabel: PropTypes.string.isRequired,
}
