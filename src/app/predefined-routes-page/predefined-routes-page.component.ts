import { Component, OnInit } from '@angular/core';

import { RouteService } from '../route.service';


@Component({
  selector: 'app-predefined-routes-page',
  templateUrl: './predefined-routes-page.component.html',
  styleUrls: ['./predefined-routes-page.component.css']
})
export class PredefinedRoutesPageComponent implements OnInit {
  predefinedRoutes = this.routeService.getPredefinedRoutes();
  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
  }


}
