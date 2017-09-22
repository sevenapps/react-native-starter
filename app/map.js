import React from 'react'
import MapView from 'react-native-maps'
import { Text, View } from 'react-native'
import Button from 'react-native-button'
import { NavigationActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'

const Map = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: 'papayawhip' }}>
    <View style={{ paddingTop: 20, height: 100, justifyContent: 'center', alignItems: 'center' }}>
      <Button containerStyle={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.dispatch(NavigationActions.back()) }}>
        <LinearGradient colors={['orange', 'red']} style={{ borderRadius: 8, width: 200, height: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', backgroundColor: 'transparent' }}>Go Back</Text>
        </LinearGradient>
      </Button>
    </View>
    <MapView initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} style={{ flex: 1 }} />
  </View>
)

export default Map
