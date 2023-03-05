import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Posts } from 'src/app/Posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  name!: string;
  description!: string;

  @Input() posts!: Posts[];
  @Output() onAddPost:EventEmitter<Posts> = new EventEmitter();

  onSubmit() {
    if (!this.name) {
      alert("please add a name")
      return;
    }

    const newPost = {
      name: this.name,
      description: this.description
    }

    this.onAddPost.emit(newPost)

    this.name = '';
    this.description = '';


  }

}
