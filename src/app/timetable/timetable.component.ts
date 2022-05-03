import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { FirestoreService } from 'src/services/firestore/firestore.service';

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
  @Input() routeActivities : string[];
  @Input() currentTime !: string;
  activities: Array<any> = [];

  constructor(private firestoreService: FirestoreService) {
    

  }
  ngOnInit(): void {
    this.activitiesToArray();
    console.log(this.activities);
    //this.getNextActivityHour();
  }


   activitiesToArray(){
    for (var i of this.routeActivities){

      forkJoin([
        
        this.firestoreService.getActivity(i)
      ]).subscribe((activity: any )=> {
        
        this.activities.push(activity.payload.data());
      });
    }
  }

  getNextActivityHour(){
    console.log(this.activities);
    console.log(this.activities.length);
    for(var i of this.activities){
      console.log("nop");
    }
    
  }


  ngAfterContentInit(): void {
    //this.currentTimeInt = this.hourToInt(this.currentTime);
  }

  /*checkActivity(activityId: number, routeActivity: number): boolean {
    if (activityId == routeActivity) {
      return true;
    } else {
      return false;
    }
  }

  getNextHour(timeAvailaility: string[], timeDuration: number) {
    if (!this.encontrado) {
      for (let hour of timeAvailaility) {
        if (this.hourToInt(hour) >= this.currentTimeInt) {
          console.log("perfecto");
          this.currentTimeInt = this.hourToInt(hour) + timeDuration;
          console.log(this.currentTimeInt);
          this.encontrado = true;
          return hour;
        }
      }
    }
    return "";
  }

  hourToInt(hour: string): number {
    return parseInt(hour.split(":")[0]);
  }

  intToHour(hourInt: number): string {
    return hourInt + ":00";
  }*/
}
