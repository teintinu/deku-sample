/** @jsx dom */

import {dom,render,tree} from 'deku'

var HelloWorld = {
  render(component) {
    let {props,state} = component
    return (
      <div>
        {props.text}
      </div>
    )
  }
}

var app = tree(<HelloWorld text="Hello World!" />)

render(app, document.body)
