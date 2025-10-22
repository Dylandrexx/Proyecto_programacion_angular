import { createAction, props } from '@ngrx/store';
import { Post } from './posts.models';

export const addPost    = createAction('[Posts] Add',    props<{ post: Post }>());
export const removePost = createAction('[Posts] Remove', props<{ id: string }>());
export const upvote     = createAction('[Posts] Upvote', props<{ id: string }>());
export const downvote   = createAction('[Posts] Downvote', props<{ id: string }>());
