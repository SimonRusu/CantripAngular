import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

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
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordPageComponent } from './password-page/password-page.component';
import { RoutePageComponent } from './route-page/route-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { MapComponent } from './map/map.component';
import { TimetableComponent } from './timetable/timetable.component';
import { LoggedInHeaderComponent } from './logged-in-header/logged-in-header.component';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



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
    CarouselComponent,
    ContactUsComponent,
    AlertModalComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PasswordPageComponent,
    RoutePageComponent,
    ProfilePageComponent,
    AboutUsPageComponent,
    MapComponent,
    LoggedInHeaderComponent,

    TimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

