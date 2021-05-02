import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/views/HomeView';
import MessageDetailView from './src/views/MessageDetail';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="MessageDetailView" component={MessageDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;