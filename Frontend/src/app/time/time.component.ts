import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {NgForOf} from "@angular/common";
import {TimeService} from "./time.service";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  times: any[] = [];

  constructor(private readonly timeService: TimeService) {}

  ngOnInit() {
    this.fetchTimes();
  }

  addTime() {
    this.timeService.postTime().subscribe(() => {
      this.fetchTimes();
    });
  }

  fetchTimes() {
    this.timeService.getTimes().subscribe((data: any) => {
      this.times = data;
    });
  }

  protected readonly of = of;
}
