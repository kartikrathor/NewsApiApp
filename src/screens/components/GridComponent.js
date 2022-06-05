import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function GridComponent(
{
   data="",
   imageURL=""
}
) {
  return (
    <View style={styles.container}>
      
        <View style = {styles.grid}>
        <Image
        style= {styles.image}
        source={{uri: imageURL }}
      />
      <Text style={styles.imageHeadLine}>{data} </Text>
        </View>
          </View>
        

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:10
  },
  image:{
      height:190,
      width:180,
  },
  imageHeadLine:{
      marginTop:-50,
      width:160,
      color:'#000000',
      fontWeight:'600',
      marginHorizontal:10
  },
  grid:{
    marginTop:20
  }
});
