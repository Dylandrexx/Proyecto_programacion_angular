import { createReducer, on } from '@ngrx/store';
import { addPost, removePost, upvote, downvote } from './posts.actions';
import { Post } from './posts.models';

export const initialState: Post[] = [
  { id: '1', title: 'Angular',   detail: 'Framework SPA',  votes: 1 },
  { id: '2', title: 'Bootstrap', detail: 'Estilos rápidos', votes: 2 },
];

export const postsReducer = createReducer(
  initialState,
  on(addPost,    (state, { post }) => [...state, post]),
  on(removePost, (state, { id })   => state.filter(p => p.id !== id)),
  on(upvote,     (state, { id })   => state.map(p => p.id === id ? { ...p, votes: p.votes + 1 } : p)),
  on(downvote,   (state, { id })   => state.map(p => p.id === id ? { ...p, votes: Math.max(0, p.votes - 1) } : p)),
);
