import { createActionGroup, props } from '@ngrx/store';
import { Posts } from '../Posts';
 
export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Add Post': props<{ post:Posts  }>(),
    'Delete Post': props<{ post:Posts }>()
  },
});
 
export const PostsApiActions = createActionGroup({
  source: 'Posts API',
  events: {
    'Retrieved Post List': props<{ posts: Posts[] }>(),
  },
});