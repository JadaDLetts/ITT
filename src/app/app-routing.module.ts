import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {HelplinesComponent} from "./helplines/helplines.component";
import {QuizesComponent} from "./quizes/quizes.component";
import {DepressionComponent} from "./depression/depression.component";
import {Dsm5Component} from "./dsm5/dsm5.component";
import {BorderlinePersonalityComponent} from "./borderline-personality/borderline-personality.component";
import {SocialAnxietyComponent} from "./social-anxiety/social-anxiety.component";
import {GeneralAnxietyComponent} from "./general-anxiety/general-anxiety.component";
import {AdhdComponent} from "./adhd/adhd.component";
import {BipolarDisorderComponent} from "./bipolar-disorder/bipolar-disorder.component";

const routes: Routes = [
  {path: 'resume',component: ResumeComponent},
  {path: '', component: IndexComponent},
  {path: 'dashboard/:userId', component: DashboardComponent},
  {path: 'aboutUs', component: AboutComponent},
  {path: 'helplines', component: HelplinesComponent},
  {path:'quizes', component: QuizesComponent},
  {path: 'quizes/depression', component: DepressionComponent },
  {path: 'dsm-5', component: Dsm5Component},
  {path: 'quizes/borderline', component: BorderlinePersonalityComponent},
  {path: 'quizes/social_anxiety', component: SocialAnxietyComponent},
  {path: 'quizes/general_anxiety', component: GeneralAnxietyComponent},
  {path: 'quizes/adhd', component: AdhdComponent},
  {path: 'quizes/bipolar', component: BipolarDisorderComponent}
 // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
