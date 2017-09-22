# React Native Starter

This is a fork of [React Native Firebase Starter](https://github.com/andersryanc/react-native-firebase-starter) which I've taken a little bit further by installing a number of other dependencies, like:

- React Native Button
- React Navigation
- React Native Vector Icons
- Redux, Redux-Thunk
- React Native Facebook SDK
- React Native Maps
- React Native Linear Gradient
- React Native Fetch Blob

# First Time Project Setup

Install project dependencies:

```bash
yarn
cd ios
pod install
```

For android, make sure you either open up android studio to have it generate a `android/local.properties` file or that you have your `ANDROID_HOME` environment variable set to the location of your android sdks.

Next, be sure to setup your [iOS](https://invertase.io/react-native-firebase/#/v2/installation-ios) and [Android](https://invertase.io/react-native-firebase/#/v2/installation-android) google api keys (after setting up your firebase account / project) by following step 1 in each link. Both files should already be linked up in the projects - they just are not tracked by git.

- For iOS, copy in your `GoogleService-Info.plist` to the `ios` directory.
- For Android, copy in your `google-services.json` to the `android/app` directory.

For React Native Maps to work, you'll need to follow step 3 of [their android instructions](https://github.com/airbnb/react-native-maps/blob/master/docs/installation.md) and update the api key (`YOUR_GOOGLE_MAPS_API_KEY`) found in `android\app\src\main\AndroidManifest.xml`.

# Firebase database setup

This super simple example app expects you to have a root node in your database with a child of `names` which has a set of child nodes with random names for each value, like:

```
example-app -
  names -
    0 - joe
    1 - jane
    2 - john
    3 - ...
```

# Troubleshooting

When running builds for android, you may encounter `The SDK Build Tools revision (23.0.1) is too low for project ...`. If so, just open up Android Studio and address these issues in the Gradle Sync messages panel.
