import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts = [];
  public handlePostCreated(post) {
    this.storedPosts.push(post);
  }
}
