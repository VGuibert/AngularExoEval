import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistesService } from '../services/artistes.service';
import { DetailArtisteModel } from '../shared/models/detailArtiste';

@Component({
  selector: 'app-details-artiste',
  imports: [],
  templateUrl: './details-artiste.html',
  styleUrl: './details-artiste.css',
})
export class DetailsArtiste implements OnInit{

   private artisteService = inject(ArtistesService);
   private route = inject(ActivatedRoute);
   private RoutesHome = inject(Router);
   detailArtiste = signal({} as DetailArtisteModel);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('artisteId');

    this.artisteService.getDetailArtisteById(id).subscribe({
      next : (data) => {
        this.detailArtiste.set(data);
        console.log(data);
      }
    })
  }

  navigateToHome() {
    // Standard navigation
    this.RoutesHome.navigate(['']);
  };

  
}
