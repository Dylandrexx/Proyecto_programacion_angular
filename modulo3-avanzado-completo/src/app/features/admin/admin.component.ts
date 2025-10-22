import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post, CreatePostRequest } from '../../models/post.model';
import { addPost, loadPosts } from '../../store/posts.actions';
import { ApiService } from '../../services/api.service';
import { DexieDbService } from '../../services/dexie-db.service';
import { DataService } from '../../services/data-services';
import { APP_CONFIG_TOKEN, AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  postForm: FormGroup;
  posts$: Observable<Post[]>;
  dexiePosts: Post[] = [];
  dataFromService: string = '';

  constructor(
    private fb: FormBuilder,
    private store: Store<{ posts: { posts: Post[] } }>,
    private apiService: ApiService,
    private dexieDb: DexieDbService,
    private dataService: DataService,
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.posts$ = this.store.select(state => state.posts.posts);
    this.dataFromService = this.dataService.getData();
  }

  ngOnInit() {
    this.store.dispatch(loadPosts());
    this.loadDexiePosts();
  }

  onSubmit() {
    if (this.postForm.valid) {
      const postData: CreatePostRequest = {
        title: this.postForm.value.title,
        content: this.postForm.value.content,
        author: 'current-user'
      };

      // Disparar action de NgRx que trigger el Effect
      this.store.dispatch(addPost({ 
        post: { 
          id: Date.now().toString(),
          title: postData.title,
          content: postData.content,
          author: postData.author || 'anonymous',
          createdAt: new Date() 
        } 
      }));

      this.postForm.reset();
    }
  }

  async loadDexiePosts() {
    this.dexiePosts = await this.dexieDb.getAllPosts();
  }

  get appConfig() {
    return this.config;
  }
}
