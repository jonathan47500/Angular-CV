// AngularModules
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
// ExternalModules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// InternalModules
import { BlockImageFadeinComponent } from './components/block-image-fadein/block-image-fadein.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarHamburgerComponent } from './components/navbar-hamburger/navbar-hamburger.component';
import { ScreenSizeService } from './services/screen-size.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    BlockImageFadeinComponent,
    NavbarComponent,
    NgbModule
  ],
  declarations: [
    BlockImageFadeinComponent,
    NavbarComponent,
    NavbarHamburgerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: [
          ScreenSizeService
        ]
      };
  }
}
