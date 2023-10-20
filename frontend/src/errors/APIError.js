export class APIError extends Error {
  #name = "APIError"
  constructor(message) {
    super()
    this.name = this.#name
    this.message = message
  }
}
