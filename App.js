import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/views/HomeView';
import MessageDetailView from './src/views/MessageDetailView';
import { MainProvider } from './src/provider/MainProvider';
import NewMessageView from './src/views/NewMessageView';


const Stack = createStackNavigator();

function App() {
  return (
    <MainProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          gestureEnabled: true,
          gestureDirection: "vertical",
          animationEnabled: true,
        }} headerMode={false}>
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="MessageDetailView" component={MessageDetailView} />
          <Stack.Screen name="NewMessageView" component={NewMessageView} />
        </Stack.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}

export default App;