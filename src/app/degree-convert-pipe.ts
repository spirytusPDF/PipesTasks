import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeConvert',
})
export class DegreeConvertPipe implements PipeTransform {
  transform(value: number, currentUnit: string, unitToDisplay: string): string {

    if (currentUnit === unitToDisplay) return `${value}°${currentUnit}`;

    switch (currentUnit) {
      case 'C':
        switch (unitToDisplay) {
          case 'K': return `${(value + 273.15).toFixed(2)}K`;
          case 'F': return `${(value * (9 / 5) + 32).toFixed(2)}°F`;
          case 'R': return `${((value + 273.15) * (9 / 5)).toFixed(2)}°R`;
          default: break;
        }
        break; 


      case 'K':
        switch (unitToDisplay) {
          case 'C': return `${(value - 273.15).toFixed(2)}°C`;
          case 'F': return `${(value * (9 / 5) - 459.67).toFixed(2)}°F`;
          case 'R': return `${(value * (9 / 5)).toFixed(2)}°R`;
          default: break;
        }
        break; 

      case 'F':
        switch (unitToDisplay) {
          case 'K': return `${((value - 32) * (5 / 9) + 273.15).toFixed(2)}K`;
          case 'C': return `${((value - 32) * (5 / 9)).toFixed(2)}°C`;
          case 'R': return `${(value + 459.67).toFixed(2)}°R`;
          default: break;
        }
        break;

      case 'R':
        switch (unitToDisplay) {
          case 'K': return `${(value * (5 / 9)).toFixed(2)}K`;
          case 'C': return `${((value - 491.67) * (5 / 9)).toFixed(2)}°C`;
          case 'F': return `${(value - 459.67).toFixed(2)}°F`;
          default: break;
        }
        break;
    }

    return `${value}°${currentUnit}`;
  }
  }

