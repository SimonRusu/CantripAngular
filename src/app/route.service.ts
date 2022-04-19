import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Route} from "./route-page/route-page.component";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }
  //predefinedRoutesList !: Array<Object>;
  getPredefinedRoutes(){
    return this.http.get<Route[]>('/assets/json/predefinedRoutes.json');
  }
}
