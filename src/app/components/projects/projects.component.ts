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

  isAdmin = false;

  ngOnInit(): void {
    this.loadProject();
    // If you are logged in and also have administrator permissions, you are allowed to edit the content
    if (this.tokenService.getToken() && this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  loadProject(): void {
    this.serviceProject.getList().subscribe(data => {
      this.project = data;
      for (let index = 0; index < this.project.length; index++) {
        let element = this.project[index];
        if(element.icon == null || element.icon == "") {
          this.project[index].icon = "assets/logos/project.png";
        }
      }
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
