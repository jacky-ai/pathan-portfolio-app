import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, title: 'Home Page' },
  { path: 'sign_up', component: SignUpComponent, title: 'signup' },
  { path: 'log_in', component: LoginComponent, title: 'login' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
];
