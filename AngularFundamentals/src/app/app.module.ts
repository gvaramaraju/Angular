import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgForComponent } from './ng-for/ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
