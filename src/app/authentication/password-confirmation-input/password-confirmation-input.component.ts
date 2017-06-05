import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'sfs-password-confirmation-input',
  templateUrl: './password-confirmation-input.component.html',
  styleUrls: ['./password-confirmation-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: PasswordConfirmationInputComponent, multi: true},
    {provide: NG_VALIDATORS, useValue: Validators.required, multi: true}
  ]
})
export class PasswordConfirmationInputComponent implements ControlValueAccessor {

  @Input() compareTo: string;
  @Input() passwordConfirmation: string;

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
