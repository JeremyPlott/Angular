import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvWorkHistoryComponent } from './cv-work-history/cv-work-history.component';
import { CvEducationComponent } from './cv-education/cv-education.component';

@NgModule({
  declarations: [
    AppComponent,
    CvWorkHistoryComponent,
    CvEducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
