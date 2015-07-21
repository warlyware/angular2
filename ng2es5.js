//console.log(angular);

names = [];

function MyAppComponent() {
  // this.name = 'Dan';
  function
  names.push(this.name);
}

MyAppComponent.annotation = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
    template: '<h1>Hello {{name}}!</h1>'
  }),
  
];

angular.bootstrap(MyAppComponent);