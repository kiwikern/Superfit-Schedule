import { Component, Input } from '@angular/core';
import { IFitnessClass } from '../fitness-class.types';

@Component({
  selector: 'sfs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @Input()
  fitnessClass: IFitnessClass;

  constructor() { }

}
