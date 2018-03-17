import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  platforms: string[];
  versions: object;

  constructor(private platform: Platform,
              private menuCtrl: MenuController) {
  }

  ngOnInit() {
    this.platforms = this.platform.platforms();
    this.versions = this.platform.versions();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
