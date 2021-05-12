import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { IndexComponent } from './index/index.component';
import {UserService} from "./services/user.service.client";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import {PdfViewerModule} from "ng2-pdf-viewer";
import { HelplinesComponent } from './helplines/helplines.component';
import { QuizesComponent } from './quizes/quizes.component';
import { MoodComponent } from './mood/mood.component';
import { DepressionComponent } from './depression/depression.component';
import { Dsm5Component } from './dsm5/dsm5.component';
import { BorderlinePersonalityComponent } from './borderline-personality/borderline-personality.component';
import { GeneralAnxietyComponent } from './general-anxiety/general-anxiety.component';
import { SocialAnxietyComponent } from './social-anxiety/social-anxiety.component';
import { BipolarDisorderComponent } from './bipolar-disorder/bipolar-disorder.component';
import { AdhdComponent } from './adhd/adhd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    AboutComponent,
    ResumeComponent,
    HelplinesComponent,
    QuizesComponent,
    MoodComponent,
    DepressionComponent,
    Dsm5Component,
    BorderlinePersonalityComponent,
    GeneralAnxietyComponent,
    SocialAnxietyComponent,
    BipolarDisorderComponent,
    AdhdComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgxExtendedPdfViewerModule,
        PdfViewerModule,
        BrowserAnimationsModule,
        MatCardModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
