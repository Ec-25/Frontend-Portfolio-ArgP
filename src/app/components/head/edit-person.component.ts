import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { person } from 'src/app/model/person.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit{
  person:person = null;

  constructor(private servicePerson: PersonService, private router: Router, public imageServ: ImageService) {}

  ngOnInit(): void {
    this.servicePerson.getUser().subscribe(data => {
      this.person = data;
    }, err => {
      alert("Error al cargar la Persona");
    })
  }

  onUpdate(): void {
    this.person.photo = this.imageServ.url;
    this.servicePerson.update(this.person).subscribe(data => {
      this.router.navigate(['']);
      alert("Persona Actualizada");
    }, err => {
      alert("Error al actualizar la Persona");
    })
  }

  uploadImage($event:any) {
    this.imageServ.uploadImage($event, 'photoUser');
  }
}
