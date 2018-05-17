import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadCV() {
    console.log("téléchargement du cv");
  }

  scrollToAboutMe() {
    console.log("about me");
  }
}
