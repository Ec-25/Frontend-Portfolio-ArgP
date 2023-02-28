import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{
  person: person = new person("","","","","");
  isLogged = false;

  constructor(public personService: PersonService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personService.getUser().subscribe(data => {
      this.person = data;
      if(this.person.photo == ""){
        this.person.photo = "assets/logos/account.png";
      }
      if(this.person.labels.length < 94) {
        document.getElementById('labels').style.marginBottom = '54px';
      }
    })
  }
}