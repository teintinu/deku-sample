
// import {element,render,tree} from 'deku'

var deku = require('deku')

var HelloWorld = {
  render(component) {
    return deku.element('div', {}, [component.props.text]);
  }
}

var app = deku.tree(deku.element(HelloWorld, {text: "Hello World!"}))

deku.render(app, document.body)
