import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';
import { RouterModule } from '@angular/router';
import { curriculum_vitae_routes } from './curriculum-vitae.routes';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(curriculum_vitae_routes)
  ],
  declarations: [CurriculumVitaeComponent]
})
export class CurriculumVitaeModule { }
