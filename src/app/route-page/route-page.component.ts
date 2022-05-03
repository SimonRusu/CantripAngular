import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RouteService } from "../route.service";

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

  predefinedRoutes = this.routeService.getPredefinedRoutes();


  routeParams = this.route.snapshot.paramMap;
  routeIdFromRoute !: number;


  constructor(private route: ActivatedRoute, private routeService: RouteService) {

    this.routeIdFromRoute = Number(this.routeParams.get('routeId'));
  }

  ngOnInit(): void {

  }

  checkRoute(route: Route): boolean {
    if (route.routeId == this.routeIdFromRoute) {
      return true;
    } else {
      return false;
    }

  }

  ifEmpty(): boolean {
    if (this.routeIdFromRoute === 0) {
      return false;
    }
    return true;
  }

}
