/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Record} from '../record/Record';
import RecordIcon from '@/assets/svgs/records.svg';
import InsightIcon from '@/assets/svgs/insight.svg';
import {Insight} from '../insight/Insight';

export function DashboardRoutes() {
  const DashboardStack = createBottomTabNavigator();

  return (
    <DashboardStack.Navigator
      initialRouteName="record"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#01071B', borderTopWidth: 0},
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'white',
      }}>
      <DashboardStack.Screen
        name={'record'}
        component={Record}
        options={{
          headerShown: false,
          tabBarLabel: 'Record',
          tabBarIcon: ({color, size}) => (
            <RecordIcon color={color} size={size} />
          ),
        }}
      />
      <DashboardStack.Screen
        name={'insight'}
        component={Insight}
        options={{
          tabBarLabel: 'Insight',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <InsightIcon color={color} size={size} />
          ),
        }}
      />
    </DashboardStack.Navigator>
  );
}
