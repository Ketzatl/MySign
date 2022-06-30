import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/angular';

@Component({
  selector: 'app-p-full-calendar',
  templateUrl: './p-full-calendar.component.html',
  styleUrls: ['./p-full-calendar.component.css'],
})
export class PFullCalendarComponent implements OnInit {
  @Input() events: EventSourceInput = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      meridiem: false,
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.calendarOptions.events = this.events;
  }
}
