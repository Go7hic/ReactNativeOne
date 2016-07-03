import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,

} from 'react-native'
import Header from '../components/Header'
const styles = StyleSheet.create({
  container: {

  },

})

class Home extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <View style={styles.container}>
        <Header title="ONE" foreground="dark" style={{ backgroundColor: '#fff' }} />
      </View>
    )
  }
}
export const LayoutComponent = Home
export function mapStateToProps(state, props) {
  return {
    vol: state.val
  }
}