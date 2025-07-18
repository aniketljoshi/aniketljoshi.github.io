import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsDomainsComponent } from './achievements-domains/achievements-domains.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'achievements', component: AchievementsDomainsComponent },
  { path: '', component: AppComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
