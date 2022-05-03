import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CantripAngular';
  constructor(private fireAuth: FireAuthService) { }

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  public onSubmit() {

    this.fireAuth.SignOut();
  }

  async checkLoggedIn(): Promise<boolean> {
    console.log("Aqui");
    console.log(this.fireAuth.checkLoggedIn());
    return this.fireAuth.checkLoggedIn();
  }




}
