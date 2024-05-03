import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.html',
  styleUrls: ['./comment.scss'],
})
export class Comment {
  beforeNewComent: Boolean = true;
  newcomment: Boolean = false;
  newComment() {
    this.beforeNewComent = false;
    this.newcomment = true;
  }
}
