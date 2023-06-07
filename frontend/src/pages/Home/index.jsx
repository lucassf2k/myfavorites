import * as SC from "./styles"

import arrowIcon from "../../assets/images/icons/arrow.svg"
import editIcon from "../../assets/images/icons/edit.svg"
import trashIcon from "../../assets/images/icons/trash.svg"

export function Home() {
  return (
    <SC.Contaienr>
      <SC.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </SC.InputSearchContainer>
      <SC.Header>
        <strong>3 favoritos</strong>
        <a href="/">Novo favorito</a>
      </SC.Header>
      <SC.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrowIcon} alt="Ícone de uma seta apontando para cima" />
          </button>
        </header>
        <SC.Card>
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
              nam necessitatibus laudantium dolorem eum adipisci voluptatum
              nulla quae quas id officiis, est delectus at inventore temporibus?
              Animi, reiciendis asperiores?
            </p>
          </div>

          <div className="actions">
            <a href="/">
              <img
                src={editIcon}
                alt="Ícone que representa a função de editar um favorito"
              />
            </a>
            <button type="button">
              <img
                src={trashIcon}
                alt="Ícone que representa a função de deletar um favorito"
              />
            </button>
          </div>
        </SC.Card>
        <SC.Card>
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
              nam necessitatibus laudantium dolorem eum adipisci voluptatum
              nulla quae quas id officiis, est delectus at inventore temporibus?
              Animi, reiciendis asperiores?
            </p>
          </div>

          <div className="actions">
            <a href="/">
              <img
                src={editIcon}
                alt="Ícone que representa a função de editar um favorito"
              />
            </a>
            <button type="button">
              <img
                src={trashIcon}
                alt="Ícone que representa a função de deletar um favorito"
              />
            </button>
          </div>
        </SC.Card>
        <SC.Card>
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
              nam necessitatibus laudantium dolorem eum adipisci voluptatum
              nulla quae quas id officiis, est delectus at inventore temporibus?
              Animi, reiciendis asperiores?
            </p>
          </div>

          <div className="actions">
            <a href="/">
              <img
                src={editIcon}
                alt="Ícone que representa a função de editar um favorito"
              />
            </a>
            <button type="button">
              <img
                src={trashIcon}
                alt="Ícone que representa a função de deletar um favorito"
              />
            </button>
          </div>
        </SC.Card>
      </SC.ListContainer>
    </SC.Contaienr>
  )
}
