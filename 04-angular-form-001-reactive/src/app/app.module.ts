import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { StepComponent } from './steps/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
