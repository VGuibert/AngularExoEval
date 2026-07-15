import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Artiste } from '../shared/models/artistes';
import { DetailArtisteModel } from '../shared/models/detailArtiste';

@Injectable({
  providedIn: 'root',
})
export class ArtistesService {

  private http = inject(HttpClient);
  private apiUrl = `https://music.hackeuse.fr/artists`;

  getAllArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(this.apiUrl);
  }
  
  getDetailArtisteById(artisteId: string | null) : Observable<DetailArtisteModel>{
    return this.http.get<DetailArtisteModel>(`${this.apiUrl}/${artisteId}`);
  }
}