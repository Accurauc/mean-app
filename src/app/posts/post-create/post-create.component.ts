import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sw-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  @Output() postCreated: EventEmitter<any> = new EventEmitter();

  public enteredContent = '';
  public enteredTitle = '';

  constructor() { }

  ngOnInit() {
  }

  public onAddPost() {
    this.postCreated.emit({
      title: this.enteredTitle,
      content: this.enteredContent
    });
  }

}
