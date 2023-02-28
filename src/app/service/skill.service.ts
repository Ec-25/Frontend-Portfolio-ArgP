import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.http.get<Skill[]>(environment.URL + 'skill/list');
  }

  public detail(id: number): Observable<Skill>{
    return this.http.get<Skill>(environment.URL + `skill/detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.http.post<any>(environment.URL + 'skill/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.http.put<any>(environment.URL + `skill/update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(environment.URL + `skill/delete/${id}`);
  }
}
