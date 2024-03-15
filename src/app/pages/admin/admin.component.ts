import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  subMenuOpen: { [key: string]: boolean } = {};

  constructor() {}

  toggleSubMenu(menu: string): void {
    if (this.subMenuOpen[menu] === undefined) {
      this.subMenuOpen[menu] = true;
    } else {
      this.subMenuOpen[menu] = !this.subMenuOpen[menu];
    }
  }

  isSubMenuOpen(menu: string): boolean {
    return this.subMenuOpen[menu];
  }

 
}