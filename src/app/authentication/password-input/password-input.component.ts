import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'sfs-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: PasswordInputComponent, multi: true},
    {provide: NG_VALIDATORS, useValue: Validators.required, multi: true},
    {provide: NG_VALIDATORS, useFactory: minLength, multi: true}
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {

  @Input() password;

  inputControl = new FormControl();
  updateValue: any;

  writeValue(value: any) {
    this.inputControl.setValue(value);
  }

  registerOnChange(updateValue: (value: any) => void) {
    this.updateValue = updateValue;
  }

  registerOnTouched(fn: any): void {
  }
}

export function minLength () {
  return Validators.minLength(6);
}
