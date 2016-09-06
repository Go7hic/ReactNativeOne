import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'
import Header from '../components/Header'
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {

  }
  componentDidMount() {
    const { actions } = this.props

    actions.getVolRequest()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="ONE" foreground="dark" style={{ backgroundColor: '#fff' }} />
        <ScrollView>
          <View style={styles.volList}>
            <View style={styles.volItem}>
              <Image
                source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                style={{ width: width, height: 200 }}
              />
              <View>
                <Text>V1426</Text>
                <Text>心事坐票</Text>
              </View>
              <Text>
                loreloremloremlorem
              </Text>
              <Text>点点滴滴</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
export const LayoutComponent = Home
export function mapStateToProps(state, props) {
  return {
    vol: state,
  }
}
