import { HttpClient } from "./libs"

class FavoritesService {
  #httpClient

  constructor() {
    this.#httpClient = new HttpClient("http://localhost:3333")
  }

  async listFavorites(orderBy = "asc") {
    return this.#httpClient.get(`/favorites?orderBy=${orderBy}`)
  }

  async createFavorite(favorite) {
    return this.#httpClient.post("/favorites", favorite)
  }
}

export const favoritesService = new FavoritesService()
