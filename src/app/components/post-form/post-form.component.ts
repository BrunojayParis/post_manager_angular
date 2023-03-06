import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/Posts';
import { PostService } from 'src/app/services/post.service';
import { PostsActions } from 'src/app/state/posts.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  name!: string;
  description!: string;
   constructor(private postService:PostService, private store:Store){}

  onSubmit() {
    if (!this.name) {
      alert("please add a name")
      return;
    }

    const newPost = {
      name: this.name,
      description: this.description
    }
    
    this.postService.addPost(newPost).subscribe((post) => (
    this.store.dispatch(PostsActions.addPost({ post }))
    ))

    this.name = '';
    this.description = '';
  }

}
