import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./styleOfOutProject.css']
})
export class NewProjectComponent {
  icon:string = "";
  project:string = "";
  text:string = "";
  link_gh:string = "";
  link_page:string = "";

  constructor(private servProject: ProjectService, private router: Router) {}

  onCrate():void {
    if(this.icon != "" && this.project != "" && this.text != "" && this.link_gh != "") {
      const proj = new Project(this.icon, this.project, this.text, this.link_gh, this.link_page);
      this.servProject.save(proj).subscribe(data => {
        alert("Proyecto Añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al Crear Proyecto");
      });
    } else if (this.icon == "" && this.project == "" && this.text == "" && this.link_gh == "") {
      alert("Los campos no pueden estar vacios")
    } else if (this.icon == "") {
      alert("El Icono no puede estar vacio")
    } else if (this.project == "") {
      alert("El Titulo no puede estar vacio")
    } else if (this.text == "") {
      alert("El Texto no puede estar vacio")
    } else if (this.link_gh == "") {
      alert("El Link al Repositorio no puede estar vacio")
    }
  }

  uploadImage($event:any) {}
}
