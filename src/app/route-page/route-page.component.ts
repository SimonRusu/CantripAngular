import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ActivityService} from "../activity.service";
import {RouteService} from "../route.service";
import {forkJoin, Observable} from 'rxjs';

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

  routes = this.routeService.getPredefinedRoutes();
  activities = this.activityService.getActivities();
  routesList: Route[] = [];
  routeInfo !: Route ;


  constructor(private route: ActivatedRoute, private activityService: ActivityService, private routeService: RouteService) {
    this.getRoute();
    console.log(this.routeInfo);
  }

  ngOnInit(): void {

  }



   getRoute() {
    const routeParams = this.route.snapshot.paramMap;
    const routeIdFromRoute = Number(routeParams.get('routeId'));

    this.routes.subscribe(data => data.forEach(x => {
      if(x.routeId == routeIdFromRoute){
        this.routeInfo = x;
      }

      console.log(this.routeInfo);

    }));

  }

}
