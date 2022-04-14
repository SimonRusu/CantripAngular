import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PredefinedRoutesPageComponent } from './predefined-routes-page/predefined-routes-page.component';
<<<<<<< HEAD
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordPageComponent } from './password-page/password-page.component';
=======
import {RoutePageComponent} from "./route-page/route-page.component";
>>>>>>> f45e19c4528cb1264ef1b25124392a8d17eeffc9

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
<<<<<<< HEAD
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
  /* path: 'predefined-routes/:id' Para ir a customized-routes*/
=======
  path: 'route-page/:routeId',
  component: RoutePageComponent
}
>>>>>>> f45e19c4528cb1264ef1b25124392a8d17eeffc9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
