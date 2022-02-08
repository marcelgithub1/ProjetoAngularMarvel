import { Injectable  } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class SerieService{ 
  
  constructor(private http: HttpClient) { }
  
  ts = Math.floor(Date.now() / 1000);
  stringToHash = this.ts + environment.private_key + environment.public_key;
  hash = Md5.hashStr(this.stringToHash);
  finalUrl = `ts=${this.ts}&apikey=${environment.public_key}&hash=${this.hash}`

  getSeries():Observable<any>{
    let urlSeriess = `${environment.url_marvel}series?${this.finalUrl}`;
    return this.http.get<any>(urlSeriess).pipe(map((data: any) => data.data.results));
  }
  
  getSerie(id: any):Observable<any>{    
    let urlSeries = `${environment.url_marvel}series/${id}?${this.finalUrl}`;
    return this.http.get<any>(urlSeries);
  }

  searchSeries(name: any):Observable<any>{    
    let urlSearch = `${environment.url_marvel}series?titleStartsWith=${name}&${this.finalUrl}`;
    return this.http.get<any>(urlSearch).pipe(map((data: any) => data.data.results));
  }
}