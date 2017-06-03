import { Component, Input } from '@angular/core';

@Component({
  selector: 'sfs-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {

  @Input() password;

}
