import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{
  person: person = new person("","","","");

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getUser().subscribe(data => {
      this.person = data;
      if(this.person.photo == ""){
        this.person.photo = "assets/logos/account.png";
      }
    })
  }
}