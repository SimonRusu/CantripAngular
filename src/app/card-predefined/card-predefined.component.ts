import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-predefined',
  templateUrl: './card-predefined.component.html',
  styleUrls: ['./card-predefined.component.css']
})
export class CardPredefinedComponent implements OnInit {
  type: string;
  constructor() {
    this.type = 'predefined';
  }

  ngOnInit(): void {
  }

}
