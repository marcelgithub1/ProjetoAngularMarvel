import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {  
   
  constructor(private eventService: EventService, 
  private route: ActivatedRoute) { }

  event: Event = {} as Event;

  ngOnInit() { 
    this.getEvent();    
  }

  getEvent() {
    const idChar = this.route.snapshot.paramMap.get('id'); 
    
    this.eventService.getEvent(idChar).pipe(take(1)).subscribe(event =>{
      this.event = event.data.results[0];      
    })    
  }
}
