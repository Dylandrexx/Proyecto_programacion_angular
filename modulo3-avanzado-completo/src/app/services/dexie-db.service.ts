import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DexieDbService extends Dexie {
  posts!: Dexie.Table<Post, string>;

  constructor() {
    super('BlogAdvancedDB');
    
    this.version(1).stores({
      posts: 'id, title, author, createdAt'
    });
  }

  async addPost(post: Post): Promise<string> {
    return await this.posts.add(post);
  }

  async getAllPosts(): Promise<Post[]> {
    return await this.posts.toArray();
  }

  async getPostById(id: string): Promise<Post | undefined> {
    return await this.posts.get(id);
  }

  async clearPosts(): Promise<void> {
    return await this.posts.clear();
  }
}
