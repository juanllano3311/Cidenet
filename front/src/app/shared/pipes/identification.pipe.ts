import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identification'
})
export class IdentificationPipe implements PipeTransform {
  
  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.identification.indexOf(arg) > -1){
      }
    }
  }

}
