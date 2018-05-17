//AngularModules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//ExternalModules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//InternalModules
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from "./shared/shared.module";
//Routes
import { app_routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(app_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
