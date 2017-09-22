package com.firebaseexmpl;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

// Required package
import io.invertase.firebase.RNFirebasePackage; // <-- Add this line
// Optional packages - add as appropriate
// import io.invertase.firebase.admob.RNFirebaseAdMobPackage; //Firebase AdMob
// import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // Firebase Analytics
import io.invertase.firebase.auth.RNFirebaseAuthPackage; // Firebase Auth
// import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage; // Firebase Remote Config
// import io.invertase.firebase.crash.RNFirebaseCrashPackage; // Firebase Crash Reporting
import io.invertase.firebase.database.RNFirebaseDatabasePackage; // Firebase Realtime Database
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // Firebase Cloud Messaging
// import io.invertase.firebase.perf.RNFirebasePerformancePackage; // Firebase Performance
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // Firebase Storage

import com.BV.LinearGradient.LinearGradientPackage;
import com.airbnb.android.react.maps.MapsPackage;

import com.RNFetchBlob.RNFetchBlobPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNFirebasePackage(),
          // Add these packages as appropriate
          // new RNFirebaseAdMobPackage(),
          // new RNFirebaseAnalyticsPackage(),
          new RNFirebaseAuthPackage(),
          // new RNFirebaseRemoteConfigPackage(),
          // new RNFirebaseCrashPackage(),
          new RNFirebaseDatabasePackage(),
          new RNFirebaseMessagingPackage(),
          // new RNFirebasePerformancePackage(),
          new RNFirebaseStoragePackage(),
          new LinearGradientPackage(),
          new MapsPackage(),
          new FBSDKPackage(mCallbackManager),
          new RNFetchBlobPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    FacebookSdk.sdkInitialize(getApplicationContext());
    // If you want to use AppEventsLogger to log events.
    AppEventsLogger.activateApp(this);
  }
}
