import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/series.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  
  allSeries: Observable<any> | undefined;  
  
  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.allSeries = this.serieService.getSeries();    
  }

  searchSeries(name: string): void {    
    this.allSeries = this.serieService.searchSeries(name);    
  }
}
