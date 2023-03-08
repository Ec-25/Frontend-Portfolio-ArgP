import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<Experience[]> {
    return this.http.get<Experience[]>(environment.URL + 'explab/list');
  }

  public detail(id:number): Observable<Experience> {
    return this.http.get<Experience>(environment.URL + `explab/detail/${id}`);
  }

  public save(experience: Experience): Observable<any> {
    return this.http.post<any>(environment.URL + "explab/create", experience);
  }

  public update(id: number, experience: Experience): Observable<any> {
    return this.http.put<any>(environment.URL + `explab/update/${id}`, experience);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(environment.URL + `explab/delete/${id}`);
  }
}
