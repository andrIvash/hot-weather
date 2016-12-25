import { Component, Inject } from '@angular/core';
import {token} from './tokens';
import {PlacesService} from "./service/places.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'app works!';
    public places: Place[];
    public activePlace: Place;

    public constructor(@Inject(token) private _placesService: PlacesService) {
      this.places = this._placesService.getPlace();
      this.activePlace = this.places[0];
    };
}
