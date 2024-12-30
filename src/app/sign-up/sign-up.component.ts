import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  fname!: string;
  lname!: string;
  phone!: number;
  email!: string;
  password!: string;
  ht = inject(HttpClient);
  success = '';

  sign_up() {
    this.ht
      .get(
        'http://localhost/pathan-portfolio/sign_up.php?x1=' +
          this.fname +
          '&x2=' +
          this.lname +
          '&x3=' +
          this.phone +
          '&x4=' +
          this.email +
          '&x5=' +
          this.password
      )
      .subscribe((result: any) => {
        this.success = 'THANKS FOR SIGNING...';
      });
    console.log(this.ht);
  }
}
