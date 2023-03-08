import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill: Skill[] = [];
  isAdmin = false;

  constructor(private skillS: SkillService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.cargarSkills();
    // If you are logged in and also have administrator permissions, you are allowed to edit the content
    if (this.tokenService.getToken() && this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  cargarSkills(): void{
    this.skillS.list().subscribe(data =>{
      this.skill = data;
    })
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(data => {
        this.cargarSkills();
      }, err => {
        alert('No se puedo borrar la skill');
      }
      )
    }
  }
}
