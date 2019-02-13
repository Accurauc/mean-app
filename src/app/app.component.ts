import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];
  public handlePostCreated(post: Post) {
    this.storedPosts.push(post);
  }
}
