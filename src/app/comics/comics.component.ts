import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicService } from '../services/comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private comicService: ComicService) { }

  allComics: Observable<any> | undefined; 

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.allComics = this.comicService.getComics();    
  }
}
