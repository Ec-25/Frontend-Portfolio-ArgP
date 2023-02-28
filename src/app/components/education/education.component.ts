import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  education: Education[] = []

  constructor(private serviceEducation: EducationService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadEducation();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEducation(): void {
    this.serviceEducation.getList().subscribe(data => {
      this.education = data;
    })
  }

  deleteEducation(id?: number) {
    if(id != undefined){
      this.serviceEducation.delete(id).subscribe(data => {
        this.loadEducation();
      }, err => {
        alert("Error al Borrar la Experiencia")
      })
    }
  }
}
