import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class CharacterService{
      
  constructor(private http: HttpClient) {  }
  
  ts = Math.floor(Date.now() / 1000);
  stringToHash = this.ts + environment.private_key + environment.public_key;
  hash = Md5.hashStr(this.stringToHash);
  finalUrl = `ts=${this.ts}&apikey=${environment.public_key}&hash=${this.hash}`

  getCharacters():Observable<any>{
    let urlCharacters = `${environment.url_marvel}characters?${this.finalUrl}`;    
    return this.http.get<any>(urlCharacters).pipe(map((data: any) => data.data.results));
  }
  
  getCharacter(id: any):Observable<any>{    
    let urlCharacter = `${environment.url_marvel}characters/${id}?${this.finalUrl}`;
    return this.http.get<any>(urlCharacter);
  }

  searchCharacters(name: any):Observable<any>{    
    let urlSearch = `${environment.url_marvel}characters?nameStartsWith=${name}&${this.finalUrl}`;
    return this.http.get<any>(urlSearch).pipe(map((data: any) => data.data.results));
  }
}