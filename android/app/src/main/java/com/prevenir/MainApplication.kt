package com.prevenir

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader

// import com.facebook.flipper.android.AndroidFlipperClient
// import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
// import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin
// import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin
// import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin
// import com.facebook.flipper.plugins.react.ReactFlipperPlugin
// import com.facebook.flipper.core.FlipperClient
// import com.facebook.flipper.plugins.inspector.DescriptorMapping
// import android.content.Context
// import com.facebook.react.ReactInstanceManager


class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(applicationContext, reactNativeHost)
    
  // private fun initializeFlipper(context: Context, reactInstanceManager: ReactInstanceManager) {
  //     if (BuildConfig.DEBUG) {
  //         val client: FlipperClient = AndroidFlipperClient.getInstance(context)
  //         client.addPlugin(InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()))
  //         client.addPlugin(NetworkFlipperPlugin())
  //         client.addPlugin(SharedPreferencesFlipperPlugin(context))
  //         client.addPlugin(DatabasesFlipperPlugin(context))
  //         client.addPlugin(ReactFlipperPlugin())
  //         client.start()
  //     }
  // }
  

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, OpenSourceMergedSoMapping)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }

    // initializeFlipper(this, reactNativeHost.reactInstanceManager)
  }
}
