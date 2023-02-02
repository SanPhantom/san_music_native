/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import './package/utils/global';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import HomeScreen from './package/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const theme = extendTheme({
    config: {
      useSystemColorMode: true,
    },
  });

  return (
    <>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={'Home'} component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

export default App;
