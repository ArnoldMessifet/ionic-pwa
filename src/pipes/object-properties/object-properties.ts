import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convert Object to array of keys
 */
@Pipe({
  name: 'objectProperties',
})
export class ObjectPropertiesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if (!value) {
      return [];
    }

    return Object.keys(value);
  }
}
