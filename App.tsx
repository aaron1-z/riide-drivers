import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import SplashScreen from './src/screens/SplashScreen';
import AppNavigation from './src/navigation/appNavigator';  // Importing the navigation setup

const Stack = createStackNavigator();

const App = () => {
  const [isSplashDone, setSplashDone] = useState(false);

  // Simulate splash screen delay
  useEffect(() => {
    setTimeout(() => {
      setSplashDone(true);
    }, 3000); // 3 seconds delay for the splash screen
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Conditional rendering for splash screen */}
        {!isSplashDone ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          // Once splash is done, render AppNavigation (where actual screens are handled)
          <Stack.Screen name="AppNavigation" component={AppNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
