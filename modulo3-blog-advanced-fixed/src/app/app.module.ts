import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';                        
import { HomeComponent } from './home/home.component';                 
import { PostFormComponent } from './posts/post-form/post-form.component'; 
import { PostsListComponent } from './posts/posts-list/posts-list.component'; 

import { postsReducer } from './store/posts.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostFormComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ posts: postsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
