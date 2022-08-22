import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.country.indexOf(arg) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
