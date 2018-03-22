import { Component, OnInit } from '@angular/core';
import { IonicPage, MenuController, Platform } from 'ionic-angular';

@IonicPage()
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
    console.log('platforms', this.platforms);
    console.log('versions', this.versions);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
