import { Component, Input } from '@angular/core';

@Component({
  selector: 'sfs-user-name-input',
  templateUrl: './user-name-input.component.html',
  styleUrls: ['./user-name-input.component.css']
})
export class UserNameInputComponent {

  @Input() userName;

}
