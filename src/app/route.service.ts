import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  getPredefinedRoutes(){
    return this.http.get<{routeId: number, routeName: string, numberOfPeople: number, price: number,
      thumbnailPath: string, dateAvailability: string[], publishDate: string, activities: string[],
      startTime: string}[]>('/assets/json/predefinedRoutes.json');
  }
}
