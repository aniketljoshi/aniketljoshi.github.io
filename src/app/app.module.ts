import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ExperienceComponent } from './experience/experience.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsDomainsComponent } from './achievements-domains/achievements-domains.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    SummaryComponent,
    SkillsComponent,
    AchievementsDomainsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
