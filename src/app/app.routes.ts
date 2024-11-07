import { Routes } from '@angular/router';
import { ListingEbookComponent } from './listing-ebook/listing-ebook.component';
import { DetailsEbookComponent } from './details-ebook/details-ebook.component';
import { EditingEbookComponent } from './editing-ebook/editing-ebook.component';
import { CreateEbookComponent } from './create-ebook/create-ebook.component';

export const routes: Routes = [
    {path: '', component: ListingEbookComponent},
    {path: 'livros/:id', component: DetailsEbookComponent},
    {path: 'editar/livros/:id', component: EditingEbookComponent},
    {path: 'criar-livro', component: CreateEbookComponent},
];
