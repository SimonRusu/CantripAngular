import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PredefinedRoutesPageComponent } from './predefined-routes-page/predefined-routes-page.component';
import {RoutePageComponent} from "./route-page/route-page.component";

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
  path: 'route-page/:routeId',
  component: RoutePageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
