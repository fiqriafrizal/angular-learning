import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      age: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.myForm.value);
    this.submitted = true;
  }
}
