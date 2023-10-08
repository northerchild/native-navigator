import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pagina1Screen from '../screen/Pagina1Screen';
import Pagina2Screen from '../screen/Pagina2Screen';

const Drawer = createDrawerNavigator();

export const BarraLateral = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pagina1Screen" component={Pagina1Screen} />
      <Drawer.Screen name="Pagina2Screen" component={Pagina2Screen} />
    </Drawer.Navigator>
  );
}
