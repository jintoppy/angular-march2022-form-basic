import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallName'
})
export class SmallNamePipe implements PipeTransform {

  transform(value: string, totalCount:number = 2): string {
    return value.substr(0,totalCount);
  }

}
