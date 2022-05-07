import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CantripAngular';
  logged !: boolean;
  constructor(private fireAuth: FireAuthService) { }

  ngOnInit(): void {
    this.logged = this.checkLoggedIn();
  }

  checkLoggedIn(): boolean {
    this.fireAuth.checkLoggedIn();
    let dato = localStorage.getItem('user');
    if (dato !== "false") {
      console.log("logueado");
      return true;
    } else {
      console.log("no logueado");
      return false;
    }
  }

}
