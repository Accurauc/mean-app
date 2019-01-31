import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  public enteredPosts = '';
  public post = '';

  constructor() { }

  ngOnInit() {
  }

  public onAddPost() {
    this.post = this.enteredPosts;
  }

}
