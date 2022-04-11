import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { RouteSettingsComponent } from './route-settings/route-settings.component';
import { CardAboutUsComponent } from './card-about-us/card-about-us.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PredefinedRoutesPageComponent } from './predefined-routes-page/predefined-routes-page.component';
import { CardPredefinedComponent } from './card-predefined/card-predefined.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardHomeComponent,
    RouteSettingsComponent,
    CardAboutUsComponent,
    SearchBarComponent,
    CardPredefinedComponent,
    HomePageComponent,
    PredefinedRoutesPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
