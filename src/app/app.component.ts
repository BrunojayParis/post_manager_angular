import { Component } from '@angular/core';
import { Posts } from './Posts';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Posts[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  deletePost(post:Posts){
    this.postService.deletePost(post).subscribe(()=>(
      this.posts = this.posts.filter(p => p.id !== post.id)
    ))
  }

  addPost(post:Posts){
    this.postService.addPost(post).subscribe((post)=>(this.posts.push(post)))
  }

}
