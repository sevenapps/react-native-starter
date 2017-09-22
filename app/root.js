import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import MapView from 'react-native-maps'
import { connect } from 'react-redux'
import { subscribe } from './redux/actions/names'
import Button from 'react-native-button'

class Root extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(subscribe())
    }, 1e3)
  }
  onPress() {
    alert('ouch! stop stouching me')
  }
  render() {
    const { isLoaded, names } = this.props
    return (
      <View style={styles.container}>
        <Icon name="envira" size={32} />
        <MapView initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} style={{ width: 200, height: 100 }} />
        {!isLoaded && <Text style={styles.welcome}>... loading</Text>}
        {isLoaded && names.map((name, i) => <Text key={i} style={styles.welcome}>{name}</Text>)}
        <Button onPress={this.onPress.bind(this)}>
          <LinearGradient colors={['orange', 'red']} style={{ width: 200, height: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', backgroundColor: 'transparent' }}>Touch Me</Text>
          </LinearGradient>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default connect(
  state => ({
    isLoaded: state.names.isLoaded,
    names: state.names.data,
  })
)(Root)
