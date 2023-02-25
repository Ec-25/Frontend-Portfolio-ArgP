import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { person } from '../model/person.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<person> {
    return this.http.get<person>(environment.URL + 'person/detail/1');
  }
}
