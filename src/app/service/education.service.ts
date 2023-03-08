import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<Education[]> {
    return this.http.get<Education[]>(environment.URL + 'education/list');
  }

  public detail(id:number): Observable<Education> {
    return this.http.get<Education>(environment.URL + `education/detail/${id}`);
  }

  public save(education: Education): Observable<any> {
    return this.http.post<any>(environment.URL + "education/create", education);
  }

  public update(id: number, education: Education): Observable<any> {
    return this.http.put<any>(environment.URL + `education/update/${id}`, education);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(environment.URL + `education/delete/${id}`);
  }
}
