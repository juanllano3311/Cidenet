import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLastName'
})
export class FirstLastNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.firstLastName.indexOf(arg) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
