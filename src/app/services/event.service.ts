import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class EventService{ 
  
  constructor(private http: HttpClient) { }
  
  ts = Math.floor(Date.now() / 1000);
  stringToHash = this.ts + environment.private_key + environment.public_key;
  hash = Md5.hashStr(this.stringToHash);
  finalUrl = `ts=${this.ts}&apikey=${environment.public_key}&hash=${this.hash}`

  getEvents():Observable<any>{
    let urlEvents = `${environment.url_marvel}events?${this.finalUrl}`;
    return this.http.get<any>(urlEvents).pipe(map((data: any) => data.data.results));
  }  
}
