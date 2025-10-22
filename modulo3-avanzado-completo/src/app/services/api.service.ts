import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Post, CreatePostRequest } from '../models/post.model';
import { DexieDbService } from './dexie-db.service';
import { syncPostFromApi } from '../store/posts.actions';
import { APP_CONFIG_TOKEN, AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private store: Store,
    private dexieDb: DexieDbService,
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig
  ) {
    this.apiUrl = config.apiUrl;
  }

  // GET todos los posts desde API
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  // POST agregar nuevo post (Requisito 8)
  addPost(postData: CreatePostRequest): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, postData)
      .pipe(
        tap((newPost: Post) => {
          // Notificar a Redux con Action cuando el API responde afirmativamente
          this.store.dispatch(syncPostFromApi({ post: newPost }));
          
          // Agregar asíncronamente a Dexie (Requisito 10)
          this.dexieDb.addPost(newPost)
            .then(() => console.log('✅ Post guardado en Dexie'))
            .catch(error => console.error('❌ Error guardando en Dexie:', error));
        })
      );
  }

  // Login simulation
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }
}
