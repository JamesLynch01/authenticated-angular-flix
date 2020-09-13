import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpLoginComponent } from './sign-up-login/sign-up-login.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: SignUpLoginComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
