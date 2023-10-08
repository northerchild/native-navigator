import React from 'react';
import Pagina1Screen from '../screen/Pagina1Screen';
import Pagina2Screen from '../screen/Pagina2Screen';
import Pagina3Screen from '../screen/Pagina3Screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';
 
const Tab = createMaterialTopTabNavigator();
 
export const Toptabs = () => {
 
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: '#694fad',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#694fad',
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: (props) => { 
        let iconName: string = '';
        switch(route.name) {
            case 'Pagina1Screen' :
                iconName = 'P1'
            break;

            case 'Pagina2Screen' :
                iconName = 'P2'
            break;

            case 'Pagina3Screen' :
                iconName = 'P3'
            break;
        }
        return <Text style={{color: props.color}}>{ iconName }</Text>
        },
      })}>
      <Tab.Screen name="Pagina1Screen" options={{title:'Tab1'}} component={Pagina1Screen} />
      <Tab.Screen name="Pagina2Screen" options={{title:'Tab2'}} component={Pagina2Screen} />
      <Tab.Screen name="Pagina3Screen" options={{title:'Tab3'}} component={Pagina3Screen} />
    </Tab.Navigator>
  );
};