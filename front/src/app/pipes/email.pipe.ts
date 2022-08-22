import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.email.indexOf(arg) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
