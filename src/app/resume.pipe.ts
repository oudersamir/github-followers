import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, limit?: number): unknown {
    if(!value)
    return null;
     let malimit=(limit)?  limit : 10;
    return  value.substr(0,malimit);
  }

}
