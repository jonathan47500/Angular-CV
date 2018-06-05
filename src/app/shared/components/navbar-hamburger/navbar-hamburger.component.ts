import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'cv-navbar-hamburger',
  templateUrl: './navbar-hamburger.component.html',
  styleUrls: ['./navbar-hamburger.component.scss']
})
export class NavbarHamburgerComponent implements OnInit {
  @Input() isOpen;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}
