import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AreaPointsComponent } from './area-points/area-points.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaPointsComponent,
    TemperaturComponent,
    TeddyBearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
