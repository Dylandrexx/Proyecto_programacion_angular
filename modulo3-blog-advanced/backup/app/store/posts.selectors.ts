import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from './posts.models';

export const selectPostsState = createFeatureSelector<readonly Post[]>('posts');

export const selectSortedByVotes = createSelector(
  selectPostsState,
  (posts) => [...posts].sort((a, b) => b.votes - a.votes)
);
