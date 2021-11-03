import { Component } from '@angular/core';
import { Shoes } from './my-interface';   /* importing Shoes interface - data type from my-interface.ts file */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* array declared in component */
  programmingLanguages:string[] = ['Javascript', 'Python', 'Go', 'Java'];
  
  /* creating shoes variables of own data type Shoes */
  /* interfaces are made up of various fields, similar to a JavaScript object. */
  first_shoe: Shoes = { brand: 'Nike', color: 'black' };
  second_shoe: Shoes = { brand: 'Addidas', color: 'white' };

  /* array shoes of data type Shoes */
  shoes:Shoes[ ] = [this.first_shoe, this.second_shoe];

}
