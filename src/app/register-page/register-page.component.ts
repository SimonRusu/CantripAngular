import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, ValidatorFn, AbstractControl, ValidationErrors, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import {FireAuthService} from "../../services/firestore/fire-auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  public email: string;

  constructor(private router: Router, public dialog: MatDialog, private fireAuth: FireAuthService) {
    const data = this.router.getCurrentNavigation()?.extras.state as {email:string};
    this.email = data.email;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      password: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.:,#_()\/]).{8,}$')]),

      confirmPassword: new FormControl('', [Validators.required])
    }, {validators:this.checkPasswords})

  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value

    return pass === confirmPass ? null : { notSame: true }
  }

  registerUser(): void{
    console.log(this.email);
    console.log(this.registerForm.value.password);
    this.fireAuth.singUp(this.email, this.registerForm.value.password).then(() => {
      this.openDialog();
    }).catch((error) => {
      this.errorDialog();

    })

  }

  openDialog(): void{
    const dialogRef = this.dialog.open(AlertModalComponent,
       {data: {dialogTitle: "Thanks for registering!",
        dialogText: "If you have any problems or suggestions, feel free to contact us",
        dialogIcon: "mark_email_unread",
        dialogIconColor: "black"}});
    console.log(this.registerForm.value);
  }

  errorDialog(): void{
    this.dialog.open(AlertModalComponent,
      {data: {dialogTitle: "There was an error in the registration process!",
          dialogText: "Please,try again",
          dialogIcon: "mark_email_unread",
          dialogIconColor: "black"}});

  }

}

