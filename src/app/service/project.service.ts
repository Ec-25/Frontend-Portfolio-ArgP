import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.URL + 'project/list');
  }

  public detail(id:number): Observable<Project> {
    return this.http.get<Project>(environment.URL + `project/detail/${id}`);
  }

  public save(project: Project): Observable<any> {
    return this.http.post<any>(environment.URL + "project/create", project);
  }

  public update(id: number, project: Project): Observable<any> {
    return this.http.put<any>(environment.URL + `project/update/${id}`, project);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(environment.URL + `project/delete/${id}`);
  }
}
