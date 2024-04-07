import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
  transform(value: Date): string {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    
    if (value === now) {
      return 'Today ' + this.datePipe.transform(value, 'h:mm a');
    } else if (value === yesterday) {
      return 'Yesterday ' + this.datePipe.transform(value, 'h:mm a');
    } else {
      return this.datePipe.transform(value, 'd MMM h:mm a') ?? "";
    }
  }

  constructor(private datePipe: DatePipe) {}
}
