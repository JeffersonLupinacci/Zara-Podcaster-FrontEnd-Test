import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})

export class MinuteSecondsPipe implements PipeTransform {
    // Convert number in Minutes:Seconds
    transform(value: number): string {
      const date = new Date(null);
      date.setSeconds(value);
      return date.toISOString().substr(11, 5);
    }
}
