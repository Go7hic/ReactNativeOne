import React from 'react'
import {
  View,
  Text,
  Image,
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
  componentDidMount() {
    const { actions } = this.props
    actions.getVolRequest()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="ONE" foreground="dark" style={{ backgroundColor: '#fff' }} />
        <View style={styles.container}>
          <View style={styles.volList}>
            <View style={styles.volItem}>
              <Image
                source={{ uri: 'http://image.wufazhuce.com/FtBOYkscg4Yoo1-odAQKao_lGfaY' }}
                style={{ width: 400, height: 200 }}
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
        </View>
      </View>
    )
  }
}
export const LayoutComponent = Home
export function mapStateToProps(state) {
  return {
    vol: state.val,
  }
}
