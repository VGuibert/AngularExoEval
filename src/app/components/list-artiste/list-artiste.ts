import { Component, inject, OnInit, signal } from '@angular/core';
import { Artiste } from '../../shared/models/artistes';
import { ArtistesService } from '../../services/artistes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-artiste',
  imports: [RouterLink],
  templateUrl: './list-artiste.html',
  styleUrl: './list-artiste.css',
})
export class ListArtiste implements OnInit {

  private fetchArtist = inject(ArtistesService)
  listOfArtist = signal([] as Artiste[])

  ngOnInit(): void {
    this.fetchArtist.getAllArtistes().subscribe({
      next : (data) => this.listOfArtist.set(data)
    })
  }
}
