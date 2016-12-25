import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AreaPointsComponent} from './area-points/area-points.component';
import {TemperaturComponent} from './temperatur/temperatur.component';
import {TeddyBearComponent} from './teddy-bear/teddy-bear.component';
import {TypeFilterPipe} from './type-filter.pipe';

import {PlacesService} from './service/places.service';
import {token} from './tokens';

@NgModule({
    declarations: [
        AppComponent,
        AreaPointsComponent,
        TemperaturComponent,
        TeddyBearComponent,
        TypeFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [{provide: token, useClass: PlacesService}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
