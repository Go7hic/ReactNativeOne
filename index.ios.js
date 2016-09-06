import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { Provider } from 'react-redux'
import Navigation from './src/components/Navigation'
import configureStore from './src/store/configureStore'
const store = configureStore()

class ReactNativeOne extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNativeOne', () => ReactNativeOne)
