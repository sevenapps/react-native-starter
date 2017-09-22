import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { subscribe } from './redux/actions/names'
import Button from 'react-native-button'
import { AccessToken, LoginButton } from 'react-native-fbsdk'

class Root extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(subscribe())
    }, 1e3)
  }
  onPress() {
    this.props.navigation.navigate('Map')
  }
  onLoginFinished(error, result) {
    if (error) {
      alert("login has error: " + result.error)
    } else if (result.isCancelled) {
      alert("login is cancelled.")
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          alert(data.accessToken.toString())
        }
      )
    }
  }
  onLogoutFinished() {
    alert("logout.")
  }
  render() {
    const { isLoaded, names } = this.props
    return (
      <View style={styles.container}>
        <Icon name="envira" size={32} />
        {!isLoaded && <Text style={styles.welcome}>... loading</Text>}
        {isLoaded && names.map((name, i) => <Text key={i} style={styles.welcome}>{name}</Text>)}
        <Button containerStyle={{ marginBottom: 12 }} onPress={this.onPress.bind(this)}>
          <LinearGradient colors={['orange', 'red']} style={{ borderRadius: 8, width: 200, height: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', backgroundColor: 'transparent' }}>View Map</Text>
          </LinearGradient>
        </Button>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={this.onLoginFinished.bind(this)}
          onLogoutFinished={this.onLogoutFinished.bind(this)} />
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
