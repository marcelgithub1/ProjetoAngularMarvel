import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {  
   
  constructor(private characterService: CharacterService, 
  private route: ActivatedRoute) { }

  character: Character = {} as Character;

  ngOnInit() { 
    this.getCharacter();    
  }

  getCharacter() {
    const idChar = this.route.snapshot.paramMap.get('id'); 
    
    this.characterService.getCharacter(idChar).pipe(take(1)).subscribe(character =>{
      this.character = character.data.results[0];      
    })    
  }
}