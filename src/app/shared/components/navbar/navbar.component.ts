import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'cv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen = false;

  constructor(protected _screenSizeService: ScreenSizeService) {
    this._screenSizeService.getObservable().subscribe(() => {
        this.updateIsOpen();
    });
  }

  ngOnInit() {
  }

  updateIsOpen() {
    if (this._screenSizeService.isGtXsScreen() && this.isOpen === true) {
      this.isOpen = false;
    }
  }

  onOpen() {
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }
}
