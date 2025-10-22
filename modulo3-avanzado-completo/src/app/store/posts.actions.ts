import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(
  '[Posts] Load Posts Failure',
  props<{ error: string }>()
);

export const addPost = createAction(
  '[Posts] Add Post',
  props<{ post: Post }>()
);

export const addPostSuccess = createAction(
  '[Posts] Add Post Success',
  props<{ post: Post }>()
);

export const syncPostFromApi = createAction(
  '[Posts] Sync Post From API',
  props<{ post: Post }>()
);
