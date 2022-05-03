import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/services/firestore/firestore.service';
import { Route } from '../route-page/route-page.component';

import { RouteService } from '../route.service';


@Component({
  selector: 'app-predefined-routes-page',
  templateUrl: './predefined-routes-page.component.html',
  styleUrls: ['./predefined-routes-page.component.css']
})
export class PredefinedRoutesPageComponent implements OnInit {
  predefinedRoutes: Observable<Route[]>;
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.getRoutes();

  }
  async getRoutes() {
    this.predefinedRoutes = await this.firestoreService.getRoutes();
  }


}
