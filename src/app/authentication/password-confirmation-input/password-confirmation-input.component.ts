import { Component, Input } from '@angular/core';

@Component({
  selector: 'sfs-password-confirmation-input',
  templateUrl: './password-confirmation-input.component.html',
  styleUrls: ['./password-confirmation-input.component.css']
})
export class PasswordConfirmationInputComponent {

  @Input() compareTo: string;
  @Input() passwordConfirmation: string;

}
