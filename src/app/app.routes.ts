import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, title: 'Home Page' },
  { path: 'sign_up', component: SignUpComponent, title: 'signup' },
];
