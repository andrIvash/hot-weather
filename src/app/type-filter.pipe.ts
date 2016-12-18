import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  public transform(places: Place[], type: string|boolean): Place[] {
    if (typeof type === 'boolean') {
        return places;
    } else {
        return places.filter(place => `${place.type}`.indexOf(type) !== -1);
    }
  }

}
