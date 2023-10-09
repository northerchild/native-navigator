import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Toptabs } from './src/navigator/TopTabNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Toptabs/>
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


export default App
