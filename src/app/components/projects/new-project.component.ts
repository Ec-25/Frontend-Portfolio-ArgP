import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/service/image.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./styleOfOutProject.css']
})
export class NewProjectComponent {
  icon: boolean = false ;
  project:string = "";
  text:string = "";
  link_gh:string = "";
  link_page:string = "";

  constructor(private servProject: ProjectService, private router: Router, public imageServ: ImageService) {}

  onCrate():void {
    if(this.project != "" && this.text != "" && this.link_gh != "") {
      let proj;
      if(this.icon) {
        proj = new Project(this.imageServ.url, this.project, this.text, this.link_gh, this.link_page);
      } else {
        proj = new Project("", this.project, this.text, this.link_gh, this.link_page);
      }
      this.servProject.save(proj).subscribe(data => {
        alert("Proyecto Añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al Crear Proyecto");
      });
    } else if (this.project == "" && this.text == "" && this.link_gh == "") {
      alert("Los campos no pueden estar vacios")
    } else if (this.project == "") {
      alert("El Titulo no puede estar vacio")
    } else if (this.text == "") {
      alert("El Texto no puede estar vacio")
    } else if (this.link_gh == "") {
      alert("El Link al Repositorio no puede estar vacio")
    }
  }

  uploadImage($event:any) {
    let name = "project_" + this.project;
    this.imageServ.uploadImage($event, name);
    this.icon = true;
  }
}
