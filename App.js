import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './main';
import CensoForm from './censoForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Inicio" component={Main} />
        <Stack.Screen name="censoForm" component={CensoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}