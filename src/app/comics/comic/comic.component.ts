import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Comic } from '../../models/comic.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {  
   
  constructor(private comicService: ComicService, 
  private route: ActivatedRoute) { }

  comic: Comic = {} as Comic;

  ngOnInit() { 
    this.getComic();    
  }

  getComic() {
    const idChar = this.route.snapshot.paramMap.get('id'); 
    
    this.comicService.getComic(idChar).pipe(take(1)).subscribe(comic =>{
      this.comic = comic.data.results[0];
      console.log(this.comic)
    })    
  }
}