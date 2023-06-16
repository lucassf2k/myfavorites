import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import * as S from "./styles"

import arrowIcon from "../../assets/images/icons/arrow.svg"
import editIcon from "../../assets/images/icons/edit.svg"
import trashIcon from "../../assets/images/icons/trash.svg"

import { delay } from "../../libs/delay"

import { Loader } from "../../components/Loader"

export function Home() {
  const [favorites, setFavorites] = useState([])
  const [orderBy, setOrderBy] = useState("asc")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const filteredFavoritesByName = useMemo(() => {
    return favorites.filter((favorite) =>
      favorite.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm, favorites])

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(
          `http://localhost:3333/favorites?orderBy=${orderBy}`,
        )
        await delay(500)
        setFavorites(await response.json())
      } catch (error) {
        console.log(`error: ${error}`)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [orderBy])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"))
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <S.Container>
      <Loader isLoading={isLoading} />
      <S.InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome..."
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </S.InputSearchContainer>
      <S.Header>
        <strong>
          {filteredFavoritesByName.length}
          {filteredFavoritesByName.length === 1 ? " favorito" : " favoritos"}
        </strong>
        <Link to="/new">Novo favorito</Link>
      </S.Header>
      {filteredFavoritesByName.length > 0 && (
        <S.ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrowIcon} alt="Ícone de uma seta apontando para cima" />
          </button>
        </S.ListHeader>
      )}
      {filteredFavoritesByName.map((favorite) => (
        <S.Card key={favorite.id}>
          <div className="infos">
            <div className="favorite-name">
              <strong>{favorite.name}</strong>
              <div className="favorite-details">
                {favorite.category_name && (
                  <small>{favorite.category_name}</small>
                )}
              </div>
            </div>
            <h6>{favorite.rating.toUpperCase()}</h6>
            <p>{favorite.note}</p>
          </div>

          <div className="actions">
            <Link to={`/edit/${favorite.id}`}>
              <img
                src={editIcon}
                alt="Ícone que representa a função de editar um favorito"
              />
            </Link>
            <button type="button">
              <img
                src={trashIcon}
                alt="Ícone que representa a função de deletar um favorito"
              />
            </button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  )
}
