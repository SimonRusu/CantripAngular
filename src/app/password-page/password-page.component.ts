import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.css']
})
export class PasswordPageComponent implements OnInit {

  passwordForm: FormGroup;
  public email: string;

  constructor(private router: Router, private fireAuth: FireAuthService) {
    const data = this.router.getCurrentNavigation()?.extras.state as { email: string };
    this.email = data.email;
  }

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
    })
  }

  checkPassword() {
    this.fireAuth.singIn(this.email, this.passwordForm.value.password).then((succesfully) => {
      if (succesfully) {
        this.navigateTo('home');
      } else {
        alert("Email and password do not match. Please, try again");
      }
    })
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
