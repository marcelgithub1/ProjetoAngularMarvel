import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class ComicService{ 
  
  constructor(private http: HttpClient) { }
  
  ts = Math.floor(Date.now() / 1000);
  stringToHash = this.ts + environment.private_key + environment.public_key;
  hash = Md5.hashStr(this.stringToHash);
  finalUrl = `ts=${this.ts}&apikey=${environment.public_key}&hash=${this.hash}`

  getComics():Observable<any>{
    let urlComics = `${environment.url_marvel}comics?${this.finalUrl}`;    
    return this.http.get<any>(urlComics).pipe(map((data: any) => data.data.results));
  }
  
  getComic(id: any):Observable<any>{    
    let urlComic = `${environment.url_marvel}comics/${id}?${this.finalUrl}`;
    return this.http.get<any>(urlComic);
  }

  searchComics(name: any):Observable<any>{    
    let urlSearch = `${environment.url_marvel}comics?titleStartsWith=${name}&${this.finalUrl}`;    
    return this.http.get<any>(urlSearch).pipe(map((data: any) => data.data.results));
  }
}
