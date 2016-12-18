import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'app works!';
    public places: Place[] = [
        {
            name: 'Moscow',
            type: 'Hotel',
            description: 'Hotel Description',
            phone: '333-222-222',
            images: ['', ''],
            airTemp: '28',
            waterTemp: '21',
            followers: '2312',
            following: '716'
        },
        {
            name: 'Peter',
            type: 'Hotel',
            description: 'Hotel Description',
            phone: '333-222-222',
            images: ['', ''],
            airTemp: '28',
            waterTemp: '21',
            followers: '2312',
            following: '716'
        }
    ];
    public activePlace: Place;
    public constructor() {
      this.activePlace = this.places[0];
    };
}
