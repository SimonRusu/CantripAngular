import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {FirestoreService} from "../../services/firestore/firestore.service";
//import { RouteService } from "../route.service";

export interface Route {
  routeId: number;
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

  //predefinedRoutes = this.routeService.getPredefinedRoutes();


  routeParams = this.route.snapshot.params['routeId'];
  routeIdFromRoute !: string;
  routeData : any;


  constructor(private route: ActivatedRoute, private firestoreService: FirestoreService) {
    
  }


  ngOnInit(): void {
    this.firestoreService.getRoute(this.routeParams).subscribe(route => {
      this.routeData = route.payload.data();
    })
  }




}
