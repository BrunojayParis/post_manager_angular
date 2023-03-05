import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from 'src/app/Posts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() posts!: Posts[];

  @Output() onDeletePost: EventEmitter<Posts> = new EventEmitter()

  onDelete(post: Posts) {
    this.onDeletePost.emit(post)
  }

}
