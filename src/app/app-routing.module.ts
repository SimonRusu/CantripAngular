import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PredefinedRoutesPageComponent } from './predefined-routes-page/predefined-routes-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordPageComponent } from './password-page/password-page.component';
import {RoutePageComponent} from "./route-page/route-page.component";
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent /* Default route */
},
{
  path: 'home',
  component: HomePageComponent
},
{
  path: 'predefined-routes',
  component: PredefinedRoutesPageComponent
},
{
  path: 'contact-us',
  component: ContactUsComponent
},
{
  path: 'register',
  component: RegisterPageComponent
},
{
  path: 'login',
  component: LoginPageComponent
},
{
  path: 'password',
  component: PasswordPageComponent
},
{
  /* path: 'predefined-routes/:id' Para ir a customized-routes*/
  path: 'route-page/:routeId',
  component: RoutePageComponent
},
{
  path: 'profile',
  component: ProfilePageComponent
},
{
  path: 'about-us',
  component: AboutUsPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
