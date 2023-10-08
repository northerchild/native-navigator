import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Toptabs } from './src/navigator/TopTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Toptabs/>
    </NavigationContainer>
  )
}

export default App
