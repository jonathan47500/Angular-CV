import {Routes} from '@angular/router';
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const app_routes: Routes = [
    { path: 'curriculum-vitae', loadChildren: 'app/routes/curriculum-vitae/curriculum-vitae.module#CurriculumVitaeModule' },
    { path: '', redirectTo: 'curriculum-vitae', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];
