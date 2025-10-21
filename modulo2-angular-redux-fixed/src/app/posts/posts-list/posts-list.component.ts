import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../store/posts.models';
import { addPost, removePost, upvote, downvote } from '../../store/posts.actions';
import { selectSortedByVotes } from '../../store/posts.selectors';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  standalone: true,
  imports: [CommonModule, PostFormComponent]
})
export class PostsListComponent {
  posts$!: Observable<readonly Post[]>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectSortedByVotes);
  }

  onCreate(post: any)        { this.store.dispatch(addPost({ post: { ...post, id: Date.now().toString(), votes: 0 } })); }
  onUp(id: string)            { this.store.dispatch(upvote({ id })); }
  onDown(id: string)          { this.store.dispatch(downvote({ id })); }
  onRemove(id: string)        { this.store.dispatch(removePost({ id })); }

  trackById(index: number, post: Post): string {
    return post.id;
  }
}
