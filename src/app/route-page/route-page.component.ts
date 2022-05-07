import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {FirestoreService} from "../../services/firestore/firestore.service";

export interface Route {
  routeId: string;
  routeName: string;
  numberOfPeople: number;
  price: number;
  thumbnailPath: string;
  dateAvailability: string[];
  publishDate: string;
  activities: number[];
  startTime: string
}



@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.css']
})


export class RoutePageComponent implements OnInit {




  routeParams = this.route.snapshot.params['routeId'];
  routeIdFromRoute !: string;
  routeData : any;


  constructor(private route: ActivatedRoute, private firestoreService: FirestoreService) {

  }


  ngOnInit(): void {
    this.firestoreService.getRoute(this.routeParams).subscribe(route => {
      this.routeData = route.payload.data();
    })

    if(!localStorage.getItem('reloaded')){
      localStorage.setItem('reloaded', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('reloaded');
    }
  }
}
