import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/service/image.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./styleOfOutProject.css']
})
export class EditProjectComponent implements OnInit{
  project: Project = new Project("", "", "", "", "");
  constructor(private servProject: ProjectService, private actRouter:ActivatedRoute, private router: Router, public imageServ: ImageService) {}

  editIcon = false;

  ngOnInit(): void {
    this.editIcon = false;
    const id = this.actRouter.snapshot.params['id'];
    this.servProject.detail(id).subscribe(data => {
      this.project = data;
    }, err => {
      alert("Error al cargar el Proyecto");
    })
  }

  onUpdate(): void {
    const id = this.actRouter.snapshot.params['id'];
    if(this.editIcon) {
      this.project.icon = this.imageServ.url;
    }
    this.servProject.update(id, this.project).subscribe(data => {
      this.router.navigate(['']);
      alert("Proyecto Actualizada");
    }, err => {
      alert("Error al actualizar el Proyecto");
    })
  }

  uploadImage($event:any) {
    let name = "project_" + this.project.project;
    this.imageServ.uploadImage($event, name);
    this.editIcon = true;
  }
}
