/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import ExampleApp from './app/app'

export default class firebaseExmpl extends Component {
  render() {
    return (
      <Provider store={store}>
        <ExampleApp />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('firebaseExmpl', () => firebaseExmpl)
