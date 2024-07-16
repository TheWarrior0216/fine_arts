export class Artwork {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.imgUrl = data.imgUrls.regular
  }
}