/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'template.html',
  directives: [NgFor, NgIf]
})
// Component controller
class MyAppComponent {
  name: string;
  
  constructor() {
    this.names = [];
  }

  addName($event) {
    if ($event.which === 13) {
      this.names.push($event.target.value);
      $event.target.value = '';
    }
  }
}

bootstrap(MyAppComponent);
