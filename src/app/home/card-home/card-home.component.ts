import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit { 

  @Input() ngClass = '';
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }
  
}