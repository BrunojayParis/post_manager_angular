import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from './Posts';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Posts[], filterText: string) {
    if (filterText === ''|| posts.length === 0){
      return posts
    }else{
      return posts.filter((names) => names.name.toLowerCase().includes(filterText.toLowerCase()))
    }
  }

}
