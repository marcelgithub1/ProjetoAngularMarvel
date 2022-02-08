import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {  
  
  allCharacters: Observable<any> | undefined;

  constructor(private characterService: CharacterService) { }   
  
  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterService.getCharacters();    
  }

  searchCharacters(name: string): void {    
    this.allCharacters = this.characterService.searchCharacters(name);  
  }
}