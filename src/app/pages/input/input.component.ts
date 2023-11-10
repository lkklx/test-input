import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  form: FormGroup = this.fb.group({
    password:new FormControl("", [Validators.required, Validators.minLength(8)])
  });
  constructor(
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
  }
  onSubmit() {
  }
}
