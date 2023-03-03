import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project[] = []

  constructor(private serviceProject: ProjectService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadProject();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadProject(): void {
    this.serviceProject.getList().subscribe(data => {
      this.project = data;
    })
  }

  deleteProject(id?: number) {
    if(id != undefined){
      this.serviceProject.delete(id).subscribe(data => {
        this.loadProject();
      }, err => {
        alert("Error al Borrar el Proyecto")
      })
    }
  }
}
