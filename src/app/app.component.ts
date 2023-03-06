import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Store } from '@ngrx/store';

import { PostsApiActions } from './state/posts.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private postService: PostService, private store: Store) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (
      this.store.dispatch(PostsApiActions.retrievedPostList({ posts }))
    ));
  }

}
