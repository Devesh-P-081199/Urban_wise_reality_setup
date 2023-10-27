import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // form = new FormGroup ({});
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //   name: ['', Validators.required],
    // })
  }

  sendData(){
    console.log(this.form.value);
  }
}
