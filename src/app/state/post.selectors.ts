import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Posts } from '../Posts';

export const selectPosts = createFeatureSelector<Posts[]>('posts');
 
