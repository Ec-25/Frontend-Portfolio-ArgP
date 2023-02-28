import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./styleOfOutExperience.css']
})
export class EditExperienceComponent implements OnInit{
  experience: Experience = null;
  constructor(private serviceExperience: ExperienceService, private actRouter:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.serviceExperience.detail(id).subscribe(data => {
      this.experience = data;
    }, err => {
      alert("Error al cargar la Experiencia");
    })
  }

  onUpdate(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.serviceExperience.update(id, this.experience).subscribe(data => {
      this.router.navigate(['']);
      alert("Experiencia Actualizada");
    }, err => {
      alert("Error al actualizar la Experiencia");
    })
  }
}
