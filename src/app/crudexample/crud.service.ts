import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeDetails } from './crudexample.component';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class CrudService {
  Url:any='http://localhost:3000/posts/';

  constructor(private http: HttpClient) {}
 
  createDetails(employeeDetails: EmployeeDetails) {  
    return this.http.post(this.Url, employeeDetails);
  }

  getEmployees() {  
    return this.http.get<EmployeeDetails[]>(this.Url);  
  } 
 
  updateDetails(employeeDetails: EmployeeDetails) {
    return this.http.put<EmployeeDetails>(this.Url, employeeDetails)
      
  }

  editTaxDetails(employeeDetails: EmployeeDetails): Observable<any> {

    let body = JSON.stringify(employeeDetails);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<any>(`http://localhost:3000/posts/${employeeDetails.id}`, body, httpOptions)
     
  }
  
  deleteEmployee(id:number){
    const url = `${this.Url}/${id}`; 
    return this.http.delete(url)
     
  }
 
 
  
}
  

  
