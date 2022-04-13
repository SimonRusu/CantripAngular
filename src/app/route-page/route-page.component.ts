import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ActivityService} from "../activity.service";
import {RouteService} from "../route.service";

export interface Route{
  routeId: number,
  routeName: string,
  numberOfPeople: number,
  price: number,
  thumbnailPath: string,
  dateAvailability: string[],
  publishDate: string,
  activities: string[],
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

  constructor(private route: ActivatedRoute, private activityService: ActivityService, private routeService: RouteService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const routeIdFromRoute = Number(routeParams.get('routeId'));
  }

}
