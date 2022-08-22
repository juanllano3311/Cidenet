import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'othersNames'
})
export class OthersNamesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.othersNames.indexOf(arg) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
