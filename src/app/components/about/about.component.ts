import { Component } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  person: person = new person("","","","","");

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getUser().subscribe(data => {
      this.person = data;
    })
  }
}
