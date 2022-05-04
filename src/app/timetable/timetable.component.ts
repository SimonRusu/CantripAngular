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
  timeAvailaility: string[];
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
  @Input() startActivityTime !: string;
  activities = new Subject<any>()
  selectedTime = 'none';


  constructor(private firestoreService: FirestoreService) {
  }
    ngOnInit(): void {
      this.getActivities();
    }

    getActivities(): Observable<any>{
      this.firestoreService.getActivitiesById(this.routeActivities).subscribe(items =>{
        this.activities.next(items);
      })
      return this.activities.asObservable();
    }

    getNextActivityHour( timeAvailaility : [], timeDuration : number): string{
        for(let actualTime of timeAvailaility){
          if(actualTime >= this.startActivityTime){
            this.selectedTime = actualTime;
            this.startActivityTime = this.intToHour(this.hourToInt(actualTime)+timeDuration);
            break;
          }
        }
        return this.selectedTime;
    }

    hourToInt(hour: string): number {
      return parseInt(hour.split(":")[0]);
    }

    intToHour(hourInt: number): string {
      return hourInt + ":00";
    }
}
