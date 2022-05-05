import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { FirestoreService } from 'src/services/firestore/firestore.service';
import {
  query,
  collection,
  where,
  documentId,
  getDocs
} from "firebase/firestore";

export interface Activity {
  activityName: string;
  activityId: number;
  numberOfPeople: number;
  price: number;
  activityType: string;
  dateAvailability: string[];
  timeAvailability: string[];
  timeDuration: number;
  maxConcurrentActivity: string
}

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  @Input() routeActivities : any;
  @Input() startActivityTime : string;
  
  activities :Array<Activity> = [];
  actParseData : Array<any> =[];
  subject = new Subject<Array<any>>();
  displayActivities = new Observable<Array<any>>();

  constructor(private firestoreService: FirestoreService) {
  }
    ngOnInit(): void {
      this.displayActivities = this.getActivitiesData();
      this.displayActivities.subscribe(data=>{console.log(data)});
    }

    getActivitiesData(): Observable<Array<any>>{
      this.firestoreService.getActivitiesById(this.routeActivities).subscribe(items =>{
        this.activities = items as Activity[];
        let selectedTime = '';
        let startActivity = this.startActivityTime;

        for(let activity of this.activities){
          let findHour = false;
          for(let actualTime of activity.timeAvailability){
            
            if(this.hourToInt(actualTime) >= this.hourToInt(startActivity)){
              selectedTime = actualTime;
              startActivity = this.intToHour(this.hourToInt(actualTime)+activity.timeDuration);
              findHour = true;
              break;
            }
          }

          if(findHour){
            this.actParseData.push(
              {
                name: activity.activityName,
                selectedTime: selectedTime,
                finishActivity: startActivity
              });
              findHour = false;
          }
        }
        this.subject.next(this.actParseData);
        
      })
      return this.subject.asObservable();
    }


    hourToInt(hour: string): number {
      return parseInt(hour.split(":")[0]);
    }

    intToHour(hourInt: number): string {
      return hourInt + ":00";
    }
}
