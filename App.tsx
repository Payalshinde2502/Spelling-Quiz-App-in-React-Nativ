import { enableScreens } from 'react-native-screens';
enableScreens();
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './src/components/OnBoarding';
import LevelSelection from './src/screens/LevelSelection'; // Updated Level Selection
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';
import { playBackgroundMusic } from './src/components/MusicPlayer';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    playBackgroundMusic(); // Play background music when app starts
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="LevelSelection" component={LevelSelection} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
