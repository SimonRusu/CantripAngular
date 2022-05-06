import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.css']
})
export class LoggedInHeaderComponent implements OnInit {

  constructor(private fireAuth: FireAuthService) { }

  ngOnInit(): void {
  }

  public onSubmit() {

    this.fireAuth.SignOut();
  }
}
