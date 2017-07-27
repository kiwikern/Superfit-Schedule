import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (new Array(value)).fill(1);
  }

}
