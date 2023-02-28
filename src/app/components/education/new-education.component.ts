import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./styleOfOutEducation.css']
})
export class NewEducationComponent {
  education:string = "";
  institution:string = "";

  constructor(private servEducation: EducationService, private router: Router) {}

  onCrate():void {
    if(this.education != "" && this.institution != "") {
      const edu = new Education(this.education, this.institution);
      this.servEducation.save(edu).subscribe(data => {
        alert("Educacion Añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al Crear Educacion");
      });
    } else if (this.education == "" && this.institution == "") {
      alert("Los campos no pueden estar vacios")
    } else if (this.education == "") {
      alert("El Titulo no puede estar vacio")
    } else if (this.institution == "") {
      alert("La Institucion no puede estar Vacia")
    }
  }
}
