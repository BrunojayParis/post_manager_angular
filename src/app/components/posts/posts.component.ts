import { Component} from '@angular/core';
import { Posts } from 'src/app/Posts';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { selectPosts } from 'src/app/state/post.selectors';
import { PostService } from 'src/app/services/post.service';
import { PostsActions } from 'src/app/state/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  filterText!:string
  posts$:Observable<Posts[]> = new Observable()
  constructor(private postService: PostService, private store:Store){}

  

  ngOnInit(): void {
    this.posts$ = this.store.select(selectPosts)
  }

  deletePost(post: Posts) {
    this.postService.deletePost(post).subscribe(() => (
      this.store.dispatch(PostsActions.deletePost({ post }))
    ))
  }


}
