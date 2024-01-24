import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRoutes} from '@/features/auth/routes/AuthRoutes';
import {DashboardRoutes} from '@/features/dashboard/routes/DashboardRoutes';

export function Routes() {
  const RoutesStack = createNativeStackNavigator();
  return (
    <RoutesStack.Navigator>
      <RoutesStack.Screen
        name={'index-splash'}
        component={AuthRoutes}
        options={{headerShown: false}}
      />

      <RoutesStack.Screen
        name={'dashboard'}
        component={DashboardRoutes}
        options={{headerShown: false}}
      />
    </RoutesStack.Navigator>
  );
}
