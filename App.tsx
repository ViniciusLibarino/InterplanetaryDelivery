import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Router} from './src/routes';
import {AddressProvider} from './src/service/addressContext';

export default function App() {
  return (
    <NavigationContainer>
      <AddressProvider>
        <Router />
      </AddressProvider>
    </NavigationContainer>
  );
}
