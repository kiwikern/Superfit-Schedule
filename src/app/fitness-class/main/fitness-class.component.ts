import { Component, Input } from '@angular/core';
import { IFitnessClass } from '../fitness-class.types';

@Component({
  selector: 'sfs-fitness-class',
  templateUrl: './fitness-class.component.html',
  styleUrls: ['./fitness-class.component.css']
})
export class FitnessClassComponent {

  @Input()
  fitnessClass: IFitnessClass;

  constructor() { }

}
