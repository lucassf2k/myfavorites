import { useEffect, useState, useMemo, useCallback } from "react"
import { Link } from "react-router-dom"
import * as S from "./styles"

import { Loader } from "../../components/Loader"
import { Button } from "../../components/Form/Button"
import { favoritesService } from "../../services/FavoritesService"
import arrowIcon from "../../assets/images/icons/arrow.svg"
import editIcon from "../../assets/images/icons/edit.svg"
import trashIcon from "../../assets/images/icons/trash.svg"
import sadIcon from "../../assets/images/sad.svg"
import emptyBoxIcon from "../../assets/images/empty-box.svg"
import magnifierQuestion from "../../assets/images/magnifier-question.svg"

export function Home() {
  const [favorites, setFavorites] = useState([])
  const [orderBy, setOrderBy] = useState("asc")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const filteredFavoritesByName = useMemo(() => {
    return favorites.filter((favorite) =>
      favorite.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm, favorites])

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const favorites = await favoritesService.listFavorites(orderBy)
      setHasError(false)
      setFavorites(favorites)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [orderBy])

  useEffect(() => {
    fetchData()
  }, [orderBy, fetchData])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"))
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

  function handleTryAgain() {
    fetchData()
  }

  return (
    <S.Container>
      <Loader isLoading={isLoading} />
      {favorites.length > 0 && (
        <S.InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquise pelo nome..."
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </S.InputSearchContainer>
      )}
      <S.Header
        justifyContent={
          hasError
            ? "flex-end"
            : favorites.length > 0
            ? "space-between"
            : "center"
        }
      >
        {!hasError && favorites.length > 0 && (
          <strong>
            {filteredFavoritesByName.length}
            {filteredFavoritesByName.length === 1 ? " favorito" : " favoritos"}
          </strong>
        )}
        <Link to="/new">Novo favorito</Link>
      </S.Header>

      {hasError && (
        <S.ErrorContainer>
          <img src={sadIcon} alt="Imagem de uma carinha triste" />
          <div className="details">
            <strong>Ocorreu um error ao obter seus favoritos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tente novamente
            </Button>
          </div>
        </S.ErrorContainer>
      )}

      {!hasError && (
        <>
          {favorites.length < 1 && !isLoading && (
            <S.EmptyListContainer>
              <img src={emptyBoxIcon} alt="Empty Box" />
              <p>
                Você ainda não tem nenhum <strong>favorito</strong> cadastrado!
                Clique no botão no <strong>{'"Novo Favorito"'}</strong> à cima
                para cadastradar o seu primeiro
              </p>
            </S.EmptyListContainer>
          )}

          {favorites.length > 0 && filteredFavoritesByName < 1 && (
            <S.SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="magnifier question" />
              <span>Nenhum resultado encontrado para {searchTerm}</span>
            </S.SearchNotFoundContainer>
          )}

          {filteredFavoritesByName.length > 0 && (
            <S.ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img
                  src={arrowIcon}
                  alt="Ícone de uma seta apontando para cima"
                />
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
        </>
      )}
    </S.Container>
  )
}
