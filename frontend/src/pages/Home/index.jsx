import { Link } from "react-router-dom"
import * as S from "./styles"

import arrowIcon from "../../assets/images/icons/arrow.svg"
import editIcon from "../../assets/images/icons/edit.svg"
import trashIcon from "../../assets/images/icons/trash.svg"

export function Home() {
  return (
    <S.Contaienr>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>
      <S.Header>
        <strong>3 favoritos</strong>
        <Link to="/new">Novo favorito</Link>
      </S.Header>
      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrowIcon} alt="Ícone de uma seta apontando para cima" />
          </button>
        </header>
        <S.Card>
          <div className="infos">
            <div className="favorite-name">
              <strong>Naruto</strong>
              <div className="favorite-details">
                <small>8.5</small>
                <small>anime</small>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sed
              nam necessitatibus laudantium dolorem eum adipiSi voluptatum nulla
              quae quas id officiis, est delectus at inventore temporibus?
              Animi, reiciendis asperiores?
            </p>
          </div>

          <div className="actions">
            <Link to="/edit/112">
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
      </S.ListContainer>
    </S.Contaienr>
  )
}
