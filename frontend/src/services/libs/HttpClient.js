import { delay } from "../../libs/delay"

export class HttpClient {
  #baseUrl

  constructor(baseUrl) {
    this.#baseUrl = baseUrl
  }

  async get(path) {
    const response = await fetch(`${this.#baseUrl}${path}`)
    await delay(500)
    return response.json()
  }
}
