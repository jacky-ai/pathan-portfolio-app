import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  user!: any;
  constructor() {
    this.user = localStorage.getItem('uid');
    if (this.user == undefined) {
      this.user = 'none';
    }
    console.log(this.user);
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
