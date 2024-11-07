import { Routes } from '@angular/router';
import { ListingEbookComponent } from './listing-ebook/listing-ebook.component';
import { DetailsEbookComponent } from './details-ebook/details-ebook.component';

export const routes: Routes = [
    {path: '', component: ListingEbookComponent},
    {path: 'livros/:id', component: DetailsEbookComponent},
    {path: 'livros/:id', component: DetailsEbookComponent},
];
