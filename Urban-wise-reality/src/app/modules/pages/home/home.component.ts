import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  active_tab: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      user_name: ['', Validators.required],
      user_contact: ['', Validators.required],
      user_otp: ['', Validators.required],
      user_password: ['', Validators.required],
      property_address: ['', Validators.required],
      user_type: ['', Validators.required],
      property_age: ['0', Validators.required],
      property_type: ['', Validators.required],
      expected_price: ['', Validators.required],
      expected_deposit: ['', Validators.required],
      expected_rent: ['', Validators.required],
      property_size: ['', Validators.required],
    });
  }
  sendData() {
    console.log(this.form.value);
  }

  switchTab(res: any) {
    this.active_tab = res;
  }
}
