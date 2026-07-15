import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Artiste } from '../shared/models/artistes';

@Injectable({
  providedIn: 'root',
})
export class ArtistesService {

  private http = inject(HttpClient);
  private apiUrl = `https://music.hackeuse.fr/artists`;

  getAllArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(this.apiUrl);
  }
  
  getArtisteById(artisteId: string | null) : Observable<Artiste>{
    return this.http.get<Artiste>(`${this.apiUrl}/${artisteId}`);
  }
}