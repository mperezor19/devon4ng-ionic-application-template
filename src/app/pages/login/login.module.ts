import { NgModule } from '@angular/core';
import { LoginPage } from './Login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    // IonicPageModule.forChild(LoginPage),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class LoginPageModule {}
