import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(searchvalue: string): void {
    this.searchOutput.emit(searchvalue);
  }
}
