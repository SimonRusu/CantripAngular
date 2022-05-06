import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.css']
})
export class LoggedInHeaderComponent implements OnInit {

  profileData = new Observable<any>();
  constructor(private fireAuth: FireAuthService) { }

  ngOnInit(): void {
    this.profileData = this.fireAuth.getCurrentUser();
  }

  public onSubmit() {

    this.fireAuth.SignOut();
  }
}
