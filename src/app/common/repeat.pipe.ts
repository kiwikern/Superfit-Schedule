import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value > 0) {
      return (new Array(value)).fill(1).map((val, index) => index);
    }
  }

}
