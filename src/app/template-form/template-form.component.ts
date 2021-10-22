import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  constructor(private formbuilder: FormBuilder) {}

  isEncrypted: boolean;

  Newpassword: any;

  submit(f) {
    console.log(f);
  }

  // getValue(val1: any, val2: any, val3: any, val4: any, val5: any) {
  //   this.formdata.email = val1;
  //   this.formdata.fullname = val2;
  //   this.formdata.age = val3;
  //   this.formdata.address = val4;
  // }

  encrypt(x) {
    console.warn(x);
    const salt = bcrypt.genSaltSync(10);
    this.Newpassword = x;
    this.Newpassword = bcrypt.hashSync('password', 10);
    this.isEncrypted = true;
    return console.log(this.Newpassword);
  }
}
