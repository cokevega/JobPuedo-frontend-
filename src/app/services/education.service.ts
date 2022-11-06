import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = `${environment.baseUrl}/education`;

  constructor(
    private http: HttpClient
  ) { }

  addEducation(form: NgForm): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add`, form.value);
  }

  editEducation(form:NgForm,id:number):Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/edit/${id}`,form.value);
  }

  deleteEducation(id:number):Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/delete/${id}`);
  }

}
