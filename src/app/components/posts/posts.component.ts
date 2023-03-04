import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/Posts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
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
}
