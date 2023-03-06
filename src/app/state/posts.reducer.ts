import { createReducer, on } from '@ngrx/store';

import { PostsActions, PostsApiActions } from './posts.actions';
import { Posts } from '../Posts';
import { Observable } from 'rxjs';

export const initialState: Posts[] = [];

export const postsReducer = createReducer(
    initialState,
    on(PostsApiActions.retrievedPostList, (_state, { posts }) => {return posts}),

    on(PostsActions.deletePost, (state, { post }) => state = state.filter((p) => p.id !== post.id)),

    on(PostsActions.addPost, (state, { post}) => {
        return [...state, post]
    })
    )
;