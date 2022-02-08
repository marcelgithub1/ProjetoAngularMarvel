import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/series.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Serie } from '../../models/serie.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService, 
    private route: ActivatedRoute) { }

  serie: Serie = {} as Serie;

  ngOnInit(): void {
    this.getSerie();    
  }

  getSerie() {
    const idChar = this.route.snapshot.paramMap.get('id'); 
    
    this.serieService.getSerie(idChar).pipe(take(1)).subscribe(serie =>{
      this.serie = serie.data.results[0];
      console.log(this.serie)
    })    
  }

}