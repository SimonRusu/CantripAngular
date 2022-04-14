import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
>>>>>>> f45e19c4528cb1264ef1b25124392a8d17eeffc9

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
<<<<<<< HEAD
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordPageComponent } from './password-page/password-page.component';
=======
import { RoutePageComponent } from './route-page/route-page.component';
>>>>>>> f45e19c4528cb1264ef1b25124392a8d17eeffc9


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
<<<<<<< HEAD
    ContactUsComponent,
    AlertModalComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PasswordPageComponent,
=======
    RoutePageComponent,

>>>>>>> f45e19c4528cb1264ef1b25124392a8d17eeffc9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [
=======
    HttpClientModule
>>>>>>> f45e19c4528cb1264ef1b25124392a8d17eeffc9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

