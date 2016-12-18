import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-area-points',
  templateUrl: './area-points.component.html',
  styleUrls: ['./area-points.component.css']
})
export class AreaPointsComponent implements OnInit {

  @Input()
  public places;
  @Output()
  public choosePlace: EventEmitter<Place> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public choose(place: Place) {
    console.log(place.name);
    this.choosePlace.emit(place);
  }

}
