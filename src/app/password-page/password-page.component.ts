import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.css']
})
export class PasswordPageComponent implements OnInit {

  passwordForm: FormGroup;
  public email: String;

  constructor(private router: Router) {
    const data = this.router.getCurrentNavigation()?.extras.state as {email:String};
    this.email = data.email;
  }

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
    })
  }

  checkEmail(): void{
    console.log(this.passwordForm.value);
    this.navigateTo();
  }

  navigateTo(): void{
    this.router.navigate(['password']);
  }

}
