import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email!: string;
  password!: string;
  ht = inject(HttpClient);
  success = '';

  constructor(private rr: Router) {}
  log_in() {
    this.ht
      .get(
        'http://localhost/pathan-portfolio/log_in.php?&x1=' +
          this.email +
          '&x2=' +
          this.password
      )
      .subscribe((result: any) => {
        this.success = 'Welocom Again..';
        localStorage.setItem('uemail', result[0]['email']);
        localStorage.setItem('uid', result[0]['id']);
        localStorage.setItem('ufname', result[0]['fname']);
        localStorage.setItem('ulname', result[0]['lname']);
        console.log(result);

        this.rr.navigate(['/']);
      });
  }
}
