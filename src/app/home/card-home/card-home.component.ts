import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

type Route = {
  url: string[];
};

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit { 

  @Input() ngClass = '';
  @Input() title = '';
  @Input() urlRoute: Route = { url: [''] };

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  
  inRoute(): void {
    this.router.navigate(this.urlRoute.url);
  }
}