import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../screens/container/DashBoard';
import NewsDetails from '../screens/container/NewsDetails';
import Search from '../screens/Search';
import CommonContainer from '../screens/components/CommonContainer';

const Stack = createNativeStackNavigator();




export default function AppStart() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="common" component={CommonContainer}/>
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
