import { Routes } from '@angular/router';
import { ListArtiste } from './components/list-artiste/list-artiste';
import { DetailsArtiste } from './details-artiste/details-artiste';

export const routes: Routes = [
    {
        path: '',
        component: ListArtiste
    },
    {
        path : 'details/:artisteId',
        component: DetailsArtiste
    }
];
