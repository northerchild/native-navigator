import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Pagina1Screen from '../screen/Pagina1Screen';
import Pagina2Screen from '../screen/Pagina2Screen';
import Pagina3Screen from '../screen/Pagina3Screen';
import { Platform, Text } from 'react-native';

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios'
        ? <TabsAndroid/>
        : <TabsAndroid/>
}

export const TabsAndroid = ()=> {
  return (
    <BottomTabAndroid.Navigator
    inactiveColor="#fff"
    barStyle={{ backgroundColor: '#694fad' }}
    screenOptions={({route}) => ({
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
      },  
    tabBarLabelStyle:{
      fontSize:15
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
  }

    })}
    >
      <BottomTabAndroid.Screen name="Pagina1Screen" options={{title:'Tab1'}} component={Pagina1Screen} />
      <BottomTabAndroid.Screen name="Pagina2Screen" options={{title:'Tab2'}} component={Pagina2Screen} />
      <BottomTabAndroid.Screen name="Pagina3Screen" options={{title:'Tab3'}} component={Pagina3Screen} />
    </BottomTabAndroid.Navigator>
  );
}