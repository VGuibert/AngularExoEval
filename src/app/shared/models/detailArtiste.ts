import { Artiste } from "./artistes"

export interface DetailArtisteModel extends Artiste {

  "albums": [
    {
      "id": string,
      "title": string,
      "artistId": string
    },
  ]

}