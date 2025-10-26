export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface CreatePostRequest {
  title: string;
  content: string;
  author?: string;
}
