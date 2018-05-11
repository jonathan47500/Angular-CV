import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { app_routes } from './app.routes';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(app_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
