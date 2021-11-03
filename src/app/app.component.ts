import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* array declared in component */
  programmingLanguages:string[] = ['Javascript', 'Python', 'Go', 'Java'];

}
