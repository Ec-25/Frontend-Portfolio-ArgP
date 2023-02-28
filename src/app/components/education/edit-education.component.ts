import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./styleOfOutEducation.css']
})
export class EditEducationComponent implements OnInit{
  education: Education = null;
  constructor(private serviceEducation: EducationService, private actRouter:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.serviceEducation.detail(id).subscribe(data => {
      this.education = data;
    }, err => {
      alert("Error al cargar la Educacion");
    })
  }

  onUpdate(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.serviceEducation.update(id, this.education).subscribe(data => {
      this.router.navigate(['']);
      alert("Educacion Actualizada");
    }, err => {
      alert("Error al actualizar la Educacion");
    })
  }
}
