import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'sfs-user-name-input',
  templateUrl: './user-name-input.component.html',
  styleUrls: ['./user-name-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: UserNameInputComponent, multi: true},
    {provide: NG_VALIDATORS, useValue: Validators.required, multi: true},
    {provide: NG_VALIDATORS, useValue: Validators.pattern('[a-zA-Z0-9]+'), multi: true}
  ]
})
export class UserNameInputComponent implements ControlValueAccessor {
  @Input() userName;

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
