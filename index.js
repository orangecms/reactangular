import React, { Component as ReactComponent } from 'react';
import { Component as NgComponent } from '@angular/core';

// React
class FooReactComponent extends ReactComponent {
  render() {
    return React.createElement('div');
  }
}
const myReactComponent = new FooReactComponent();
console.log('This is React', myReactComponent);

console.log('', '');

// Angular
const FooNgComponent = NgComponent({
  selector: 'my-app',
  template: '<h1>Angular Foo</h1>'
});
const FooNg = FooNgComponent.Class({
  constructor: () => {},
});
const myNgComponent = new FooNg();
console.log('This is Angular', myNgComponent, FooNgComponent);
console.log(FooNgComponent)
