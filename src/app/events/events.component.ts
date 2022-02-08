import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }
  allEvents: Observable<any> | undefined; 

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.allEvents = this.eventService.getEvents();    
  }
}
