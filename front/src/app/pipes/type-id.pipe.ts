import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeId'
})
export class TypeIdPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.typeId.indexOf(arg) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
