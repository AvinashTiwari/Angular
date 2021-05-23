import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaserviceService {

  constructor(private http: HttpClient) { }

  public search(term: string){
    return this.http;
  }
}
