import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from "@angular/core";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: []
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule
    };
  }
}