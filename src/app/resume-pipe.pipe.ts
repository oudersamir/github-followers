import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumePipe'
})
export class ResumePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
