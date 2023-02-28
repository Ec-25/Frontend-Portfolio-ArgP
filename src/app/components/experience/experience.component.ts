import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private serviceExperience: ExperienceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperience(): void {
    this.serviceExperience.getList().subscribe(data => {
      this.experience = data;
    })
  }

  deleteExperience(id?: number) {
    if(id != undefined){
      this.serviceExperience.delete(id).subscribe(data => {
        this.loadExperience();
      }, err => {
        alert("Error al Borrar la Experiencia")
      })
    }
  }
}
