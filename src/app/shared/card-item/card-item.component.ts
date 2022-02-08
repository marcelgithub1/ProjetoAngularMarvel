import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() img = ''; 
  @Input() title = '';
  @Input() url = [''];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moveToPageRouter(): void {
    this.router.navigate(this.url)
  }
}
