// AngularModules
import { Component } from '@angular/core';
// InternalModules
import { environment } from '../environments/environment';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = environment.appTitle;
}
