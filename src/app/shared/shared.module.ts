//AngularModules
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from "@angular/core";
import { NgModule } from '@angular/core';
//ExternalModules
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//InternalModules
import { BlockImageFadeinComponent } from './components/block-image-fadein/block-image-fadein.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [BlockImageFadeinComponent],
  declarations: [BlockImageFadeinComponent]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule
    };
  }
}