import { AppState } from "../AppState.js"
import { Artwork } from "../models/Artwork.js"
import { api } from "./AxiosService.js"

class ArtworkService {
  async getApi() {
    const response = await api.get('/api/artworks')
    console.log(response.data)
    AppState.page = response.data.page
    console.log(AppState.page)
    const newData = response.data.artworks.map((artwork) => new Artwork(artwork))
    console.log(newData)
    AppState.artwork = newData
    return newData
  }

}
export const artworkService = new ArtworkService()