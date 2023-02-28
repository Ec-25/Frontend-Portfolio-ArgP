import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./styleOfOutSkill.css']
})
export class NewSkillComponent implements OnInit{
  name: string;
  percentage: number;

  constructor(private skillS: SkillService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    if(this.name != '' && this.percentage != 0) {
      const skill = new Skill(this.name, this.percentage);
      this.skillS.save(skill).subscribe(data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir la Skill");
      }
      );
    }
  }

}
