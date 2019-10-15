import React, { Component } from 'react'

import {ExampleComponent, Card} from 'modus-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <Card>
        This is a card
        </Card>
      </div>
    )
  }
}
