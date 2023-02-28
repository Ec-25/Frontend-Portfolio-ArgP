import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./styleOfOutExperience.css']
})
export class NewExperienceComponent {
  experience: string = "";
  description: string = "";

  constructor(private servExperience: ExperienceService, private router: Router) {}

  onCrate():void {
    if(this.experience != "" && this.description != "") {
      const exp = new Experience(this.experience, this.description);
      this.servExperience.save(exp).subscribe(data => {
        alert("Experiencia Añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al Crear Experiencia");
      });
    } else if (this.experience == "" && this.description == "") {
      alert("Los campos no pueden estar vacios")
    } else if (this.experience == "") {
      alert("La Experiencia no puede estar Vacia")
    } else if (this.description == "") {
      alert("La Descripcion no puede estar Vacia")
    }
  }
}
