import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from "../activity.service";

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
  @Input() routeActivities !: number[];
  @Input() currentTime !: string;
  activities = this.activityService.getActivities();
  currentTimeInt !: number;
  encontrado: boolean = false;

  constructor(private activityService: ActivityService) {

  }

  ngOnInit(): void {
    this.currentTimeInt = this.hourToInt(this.currentTime);

  }

  checkActivity(activityId: number, routeActivity: number): boolean {
    if (activityId == routeActivity) {
      return true;
    } else {
      return false;
    }
  }

  getNextHour(timeAvailaility: string[], timeDuration: number): string {
    if (!this.encontrado) {
      for (let hour of timeAvailaility) {

        if (this.hourToInt(hour) >= this.currentTimeInt) {
          console.log("perfecto");
          this.currentTimeInt = this.hourToInt(hour) + timeDuration;
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
  }
}
