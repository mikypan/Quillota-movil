import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class QuillotaService {

  constructor( private http: HttpClient) { }

  getTopHeadlines(){

    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e8e7b5ab69cc4b8d904d36f69ea6ed79`);
  }

}
