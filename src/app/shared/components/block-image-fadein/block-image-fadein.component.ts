// AngularModules
import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// ExternalModules
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'block-image-fadein',
  templateUrl: './block-image-fadein.component.html',
  styleUrls: ['./block-image-fadein.component.scss']
})
export class BlockImageFadeinComponent implements OnInit, AfterViewInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() job: string;
  @Input() imageBackground: string;
  @Input() buttonOneName: string;
  @Input() buttonTwoName: string;
  @Output() buttonOneFunction: EventEmitter<any> = new EventEmitter();
  @Output() buttonTwoFunction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    new WOW().init();
  }

  functionButtonOne() {
    this.buttonOneFunction.emit(null);
  }

  functionButtonTwo() {
    this.buttonTwoFunction.emit(null);
  }
}
