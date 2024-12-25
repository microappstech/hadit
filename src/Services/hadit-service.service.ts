import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environement } from '../environement';

@Injectable({
  providedIn: 'root'
})
export class HaditServiceService {
  constructor(private http: HttpClient
    ) 
  {

  }
  getCategories(): Observable<any>{
    var result = this.http.get(`${environement.apiURL}categories`);
    return result;
  }
  getHaditesByCategory(id: any): Observable<any>{
    var result = this.http.get(`${environement.apiURL}Hadites-by-category/${id}`);
    return result;
  }
  getAllHadites():Observable<any>{
    return this.http.get(`${environement.apiURL}hadits`);
  }
  searchHadites(search: any): Observable<any>{
    var result = this.http.get(`${environement.apiURL}search?s=${search}`);
    return result;
  }
}
