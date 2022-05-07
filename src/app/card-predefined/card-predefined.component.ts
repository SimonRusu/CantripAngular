import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-predefined',
  templateUrl: './card-predefined.component.html',
  styleUrls: ['./card-predefined.component.css']
})
export class CardPredefinedComponent implements OnInit {
  @Input() numberOfPeople !: number;
  @Input() price !: number;
  @Input() thumbnailPath !: string;
  @Input() routeName !: string;
  @Input() routeId !: string;


  constructor() {
    
  }

  

  ngOnInit(): void {
  }

}
