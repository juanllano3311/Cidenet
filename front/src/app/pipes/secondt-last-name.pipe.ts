import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondtLastName'
})
export class SecondtLastNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.secondtLastName.indexOf(arg) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
