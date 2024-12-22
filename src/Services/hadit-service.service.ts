import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HaditServiceService {
  private apiURL = 'http://localhost:81/';
  constructor(private http: HttpClient
    ) 
  {

  }
  getCategories(): Observable<any>{
    var result = this.http.get(this.apiURL+"Categories-hadites");
    return result;
  }
  getHaditesByCategory(id: any): Observable<any>{
    var result = this.http.get(this.apiURL+"Hadites-by-category/"+id);
    return result;
  }
}