//AngularModules
import { Component, OnInit, Input } from '@angular/core';
//ExternalModules
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'block-image-fadein',
  templateUrl: './block-image-fadein.component.html',
  styleUrls: ['./block-image-fadein.component.scss']
})
export class BlockImageFadeinComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() job: string;
  @Input() imageBackground: string;
  @Input() buttonOneName: string;
  @Input() buttonTwoName: string;
  @Input() buttonOneFunction: Function;
  @Input() buttonTwoFunction: Function;
  @Input() shadow: boolean;
  
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(){
    new WOW().init();
  }

  functionButtonOne() {
    this.buttonOneFunction();
  }

  functionButtonTwo() {
    this.buttonTwoFunction();
  }
}
