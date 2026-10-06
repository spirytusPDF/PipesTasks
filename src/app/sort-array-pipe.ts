import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray',
})
export class SortArrayPipe implements PipeTransform {
  transform(value: Array<any>, numbers:string): Array<any> {
    if (!Array.isArray(value)) return [];

    if(numbers.localeCompare("even"))
      return value.filter(n=>n % 2!= 0);

    return value.filter(n=>n % 2 == 0);
    
  }
}
