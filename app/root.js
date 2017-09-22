import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from './firebase'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, names: [] }
  }
  componentDidMount() {
    setTimeout(this._loadData.bind(this), 1e3)
  }
  _loadData() {
    firebase.database().ref('/names').on('value', snapshot => {
      const names = []
      snapshot.forEach(childSnapshot => {
        names.push(childSnapshot.val())
      })
      this.setState({ loading: false, names })
    })
  }
  render() {
    const { loading, names } = this.state
    return (
      <View style={styles.container}>
        {loading && <Text style={styles.welcome}>... loading</Text>}
        {!loading && names.map((name, i) => <Text key={i} style={styles.welcome}>{name}</Text>)}
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
