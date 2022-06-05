import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import DashBoard from './src/screens/container/DashBoard';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AppStart from './src/route/AppStart';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
            <AppStart/>
        </NavigationContainer>
      
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
