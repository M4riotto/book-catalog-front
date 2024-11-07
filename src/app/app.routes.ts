import { Routes } from '@angular/router';
import { ListingEbookComponent } from './listing-ebook/listing-ebook.component';
import { DetailsEbookComponent } from './details-ebook/details-ebook.component';
import { EditingEbookComponent } from './editing-ebook/editing-ebook.component';
import { CreateEbookComponent } from './create-ebook/create-ebook.component';
import { AuthGuard } from './auth/auth.guard';  // Importa o AuthGuard
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path: '', component: ListingEbookComponent, canActivate: [AuthGuard]  },
    { path: 'auth', component: AuthComponent },
    { path: 'livros/:id', component: DetailsEbookComponent, canActivate: [AuthGuard]  },
    { path: 'editar/livros/:id', component: EditingEbookComponent, canActivate: [AuthGuard] },  
    { path: 'criar-livro', component: CreateEbookComponent, canActivate: [AuthGuard] },  
];
