package com.wordcase;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.facebook.common.logging.FLog;  
//import android.os.Bundle;
import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Wordcase";
    }

    public void onCreate() {
      Fabric.with(this, new Crashlytics());
      FLog.setLoggingDelegate(ReactNativeFabricLogger.getInstance());

    }

    //@Override
    //protected void onCreate(Bundle savedInstanceState) {
      //super.onCreate(savedInstanceState);
      //Fabric.with(this, new Crashlytics());
      //FLog.setLoggingDelegate(ReactNativeFabricLogger.getInstance());
    //}

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage()
        );
    }
}
