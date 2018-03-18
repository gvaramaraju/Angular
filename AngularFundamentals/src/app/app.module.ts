import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { PropertyAttributeBindingComponent } from './property-attribute-binding/property-attribute-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    NgForComponent,
    NgIfComponent,
    PropertyAttributeBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
