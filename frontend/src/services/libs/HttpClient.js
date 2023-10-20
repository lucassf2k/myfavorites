import { delay } from "../../libs/delay"
import { APIError } from "../../errors/APIError"

export class HttpClient {
  #baseUrl

  constructor(baseUrl) {
    this.#baseUrl = baseUrl
  }

  async get(path) {
    await delay(500)
    const response = await fetch(`${this.#baseUrl}${path}`)
    const contentType = response.headers.get("Content-Type")
    if (!contentType.includes("application/json")) {
      throw new APIError(`${response.status} - ${response.statusText}`)
    }
    const body = await response.json()
    if (!response.ok) throw new APIError(body.Error)
    return body
  }
}
