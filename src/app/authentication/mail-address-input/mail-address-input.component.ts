import { Component, Input } from '@angular/core';

@Component({
  selector: 'sfs-mail-address-input',
  templateUrl: './mail-address-input.component.html',
  styleUrls: ['./mail-address-input.component.css']
})
export class MailAddressInputComponent  {

  @Input() mailAddress: string;
  @Input() isRequired: boolean = false;

}
