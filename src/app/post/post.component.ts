import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  // myForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  // onSubmit() {
  //   console.log(this.myForm.value.username);
  //   console.log(this.myForm.value.password);
  // }

  constructor(private postService: PostService) {}

  myForm = new FormGroup({
    userid: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

  onSubmit() {
    const userid = this.myForm.value.userid;
    const title = this.myForm.value.title;
    const body = this.myForm.value.body;

    this.postService.sendPostRequest({ userid, title, body }).subscribe(
      (response) => {
        console.log('Post request successful: ', response);
        // Handle success, if needed
      },
      (error) => {
        console.error('Error sending post request: ', error);
        // Handle error, if needed
      }
    );
  }
}
