import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'sw-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  public enteredContent = '';
  public enteredTitle = '';

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  public onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }

}
