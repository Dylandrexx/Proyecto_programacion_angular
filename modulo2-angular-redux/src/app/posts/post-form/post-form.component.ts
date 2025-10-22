import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { invalidParamValidator } from './validators';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.css']
})
export class PostFormComponent {
  @Output() create = new EventEmitter<{ title: string; detail: string }>();

  fg!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), invalidParamValidator('xyz')]],
      detail: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  has(ctrl: string, err: string) {
    const c = this.fg.get(ctrl);
    return !!c && c.touched && c.hasError(err);
  }

  submit() {
    if (this.fg.invalid) return;
    this.create.emit(this.fg.value);
    this.fg.reset();
  }
}
