import React from 'react'
import { StackNavigator } from 'react-navigation'
import Root from './root'
import Map from './map'

const ExampleApp = StackNavigator(
  {
    Root: {
      screen: Root,
    },
    Map: {
      screen: Map
    }
  },
  {
    headerMode: 'none'
  }
)

export default ExampleApp
