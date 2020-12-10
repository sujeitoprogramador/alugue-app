import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import Home from './pages/Home'; 
import Detail from './pages/Detail'; 

const Stack = createStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="home" 
        component={Home} 
        options={{
          title: 'ALUGUE',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },

          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Feather
              name="shopping-bag"
              size={24}
              color="black"
              />
            </TouchableOpacity>
          )
        }}
        />
        <Stack.Screen 
        name="detail" 
        component={Detail} 
        options={{
          title: 'Detalhe',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },

          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Feather
              name="shopping-bag"
              size={24}
              color="black"
              />
            </TouchableOpacity>
          )
        }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;