import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SplashScreen} from '../component/SplashScreen';
import LoginScreen from '../login/LoginScreen';

export function AuthRoutes() {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'splash'}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={'login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}
