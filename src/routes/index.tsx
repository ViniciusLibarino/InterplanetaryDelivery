import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {AddAddress} from '../screens/AddAddress';
import {Home} from '../screens/Home';

export type AppStackParamList = {
  HomeScreen: undefined;
  AddAddressScreen: undefined;
};

export type AppStackNavigationProp<T extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

export function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
