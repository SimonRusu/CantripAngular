import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phoneNumber: new FormControl(),
      messageText: new FormControl('', [Validators.required]),
    })
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(AlertModalComponent,
       {data: {dialogTitle: "Thank you for contacting us!",
        dialogText: "Your request has been submitted succesfully"}});
    console.log(this.form.value);
  }

  

}
