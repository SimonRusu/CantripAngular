import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivities(){
    return this.http.get<{activityName: string, activityId: number, numberOfPeople: number, price: number,
      activityType: string, dateAvailability: string[], timeAvailability: string[],
      timeDuration: number, maxConcurrentActivities: number}[]>('/assets/json/routeActivities.json');
  }
}
