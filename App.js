import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabsMenu from './src/pages/routes';
export default function App() {
  return (
    <NavigationContainer>
      <TabsMenu/>
    </NavigationContainer>
  );
}


