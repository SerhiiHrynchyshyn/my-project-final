import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch',
  pure: false
})
export class FilterBySearchPipe implements PipeTransform {

  transform(value: any, search?: string): any {
    // console.log(value, search);
    if(!search) { return value };
    
    return value.filter(el => {
      return el.first.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

}
