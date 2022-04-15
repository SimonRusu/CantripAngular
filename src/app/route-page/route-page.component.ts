import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ActivityService} from "../activity.service";
import {RouteService} from "../route.service";
import {map} from "rxjs";

export interface Route{
  routeId: number;
  routeName: string;
  numberOfPeople: number;
  price: number;
  thumbnailPath: string;
  dateAvailability: string[];
  publishDate: string;
  activities: string[];
  startTime: string
}



@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.css']
})
export class RoutePageComponent implements OnInit {

  predefinedRoutes = this.routeService.getPredefinedRoutes();
  activities = this.activityService.getActivities();

  routeParams = this.route.snapshot.paramMap;
  routeIdFromRoute !: number;


  constructor(private route: ActivatedRoute, private activityService: ActivityService, private routeService: RouteService) {

    this.routeIdFromRoute = Number(this.routeParams.get('routeId'));
  }

  ngOnInit(): void {

  }

  checkRoute(route: Route ): boolean{
    if(route.routeId == this.routeIdFromRoute){
      return true;
    } else{
      return false;
    }
  }

}
