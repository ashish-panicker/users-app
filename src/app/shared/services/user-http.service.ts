import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../types/category';
import { Department } from '../../types/department';
import { User } from '../../model/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Request Header
  // Response Header

  /**
   * REST HTTP method convention
   * GET      Fetch/Read 
   * PUT      Update
   * PATCH    Partial update
   * POST     Create new resource
   * DELETE   Delete data
   * @param http HttpClient
   */

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.categoriesUrl)
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(environment.departmentsUrl)
  }

  createUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>(environment.userUrl, user, this.httpOptions)
  }
}
