import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent {

  constructor(
    private fb: FormBuilder,
  ){ }

  ngOnInit(){
    this.formInit();
  }

  formInit(){
  }
}
