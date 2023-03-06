import { Component } from '@angular/core';
import { Posts } from './Posts';
import { PostService } from './services/post.service';
import { Store } from '@ngrx/store';

import { selectPosts } from './state/post.selectors';
import { PostsApiActions } from './state/posts.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts$ = this.store.select(selectPosts)

  constructor(private postService: PostService, private store: Store) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (
      this.store.dispatch(PostsApiActions.retrievedPostList({ posts }))
    ));
  }

}
