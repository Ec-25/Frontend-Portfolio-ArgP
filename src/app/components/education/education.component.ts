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

  isAdmin = false;

  ngOnInit(): void {
    this.loadEducation();
    // If you are logged in and also have administrator permissions, you are allowed to edit the content
    if (this.tokenService.getToken() && this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
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
