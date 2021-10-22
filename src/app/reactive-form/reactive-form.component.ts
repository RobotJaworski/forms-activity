import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  form = new FormGroup({
    talents: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    position: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    years: new FormControl('', [Validators.required, Validators.minLength(1)]),
    salary: new FormControl('', [Validators.required, Validators.minLength(3)]),
    essay: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });

  get talents() {
    return this.form.get('talents');
  }

  get position() {
    return this.form.get('position');
  }

  get years() {
    return this.form.get('years');
  }

  get salary() {
    return this.form.get('salary');
  }

  get essay() {
    return this.form.get('essay');
  }

  submit() {
    console.log(this.form);
  }
}
