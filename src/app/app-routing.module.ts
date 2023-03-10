import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditPersonComponent } from './components/head/edit-person.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'upd-person', component: EditPersonComponent},
  {path: 'add-education', component: NewEducationComponent},
  {path: 'upd-education/:id', component: EditEducationComponent},
  {path: 'add-experience', component: NewExperienceComponent},
  {path: 'upd-experience/:id', component: EditExperienceComponent},
  {path: 'add-skill', component: NewSkillComponent},
  {path: 'upd-skill/:id', component: EditSkillComponent},
  {path: 'add-project', component: NewProjectComponent},
  {path: 'upd-project/:id', component: EditProjectComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
