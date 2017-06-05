import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'sfs-mail-address-input',
  templateUrl: './mail-address-input.component.html',
  styleUrls: ['./mail-address-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: MailAddressInputComponent, multi: true},
    // {provide: NG_VALIDATORS, useValue: Validators.email, multi: true}
  ]
})
export class MailAddressInputComponent  implements ControlValueAccessor {

  @Input() mailAddress: string;
  @Input() isRequired: boolean = false;

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
