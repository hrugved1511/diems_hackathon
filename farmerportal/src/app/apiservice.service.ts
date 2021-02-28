import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const  baseUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }
  getData(url): Observable<any> {
    console.log("In get data");
    console.log(baseUrl+url);
    
    return this.http.get(baseUrl+url).pipe(
      data => data,
    );
    
  }

  putData(url,data): Observable<any>{
    console.log("In put data of apiservice");
    console.log("data is",data);

    return this.http.put(baseUrl+url,data).pipe(
      data => data
    );
  }

  postData(url,data): Observable<any> {
    console.log("In apiservice in post data");
    return this.http.post(baseUrl+url,data).pipe(
      data => data,
    );
  }
}
