import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-area-points',
  templateUrl: './area-points.component.html',
  styleUrls: ['./area-points.component.css']
})
export class AreaPointsComponent implements OnInit {

  @Input()
  public places;
  @Input()
  public activePlace;
  @Output()
  public choosePlace: EventEmitter<Place> = new EventEmitter();
  public type: string|boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public choose(place: Place) {
    this.choosePlace.emit(place);
  }
  public filtered(ev: Event) {
    ev.preventDefault();
    let elem = ev.target as HTMLElement;
    this.type = elem.innerHTML;
  }

}
