// AngularModules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ExternalModules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// InternalModules
import { CurriculumVitaeComponent } from './curriculum-vitae.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
// Routes
import { curriculum_vitae_routes } from './curriculum-vitae.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(curriculum_vitae_routes)
  ],
  declarations: [
    CurriculumVitaeComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CurriculumVitaeModule { }
