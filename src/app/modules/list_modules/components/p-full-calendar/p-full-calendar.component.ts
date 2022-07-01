import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/angular';

@Component({
  selector: 'app-p-full-calendar',
  templateUrl: './p-full-calendar.component.html',
  styleUrls: ['./p-full-calendar.component.css'],
})
export class PFullCalendarComponent implements OnInit {
  @Input() events: EventSourceInput = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    // dateClick: this.handleDateClick.bind(this),
    // eventClick: (info) => this.handleDateClick(info.event.id),
    height: 300,
    locale: 'fr',
    weekends: false,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      meridiem: false,
    },
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.events);
    this.calendarOptions.events = this.events;
  }

  handleDateClick(idModule: string) {
    this.router.navigate(['modules', 'details', idModule]);
  }
}
