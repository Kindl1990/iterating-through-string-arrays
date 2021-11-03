import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* The Angular CLI generates the following basic AppModule when creating a new application. */
@NgModule({
  declarations: [
    AppComponent    /* declarations - which component belong to NgModule*/
  ],
  imports: [
    BrowserModule,  /* imports - which other modules NgModule uses */
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
