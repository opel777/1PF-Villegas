import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/dashboard/pages/users/model';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    
    return `${value.name} ${value.surname}`;
  }

}
