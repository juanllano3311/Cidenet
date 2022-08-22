import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName'
})
export class FirstNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.firstName.indexOf(arg) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
