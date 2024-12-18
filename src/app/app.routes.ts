import { Routes } from '@angular/router';
import { HomeComponent } from '../Pages/home/home.component';
import { ContactComponent } from '../Pages/contact/contact.component';
import { HaditesComponent } from '../Pages/hadites/hadites.component';

export const routes: Routes = [
    {path : "", component:HomeComponent},
    { path:"idea", component:ContactComponent},
    { path:"hadites", component:HaditesComponent}
];
