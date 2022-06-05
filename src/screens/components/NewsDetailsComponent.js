import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function NewsDetailsComponent(
  {
    title = "",
    description = "",
    imageURL = "",
    author = ""
  }
) {
  return (
    <View style={styles.container}>

      

      <View style={styles.grid}>
        <Image
          style={styles.image}
          source={{ uri: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2PLHNAHCWAI6ZLTENMR6KFK3MI.jpg&w=1440" }}
        />
        <Text style={styles.imageHeadLine}> {JSON.stringify(title)} </Text>
        <Text style={styles.author}> {JSON.stringify(author)}</Text>
        <Text style={styles.desc}>{JSON.stringify(description)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  image: {
    height: 200,
    width: "100%",
  },
  imageHeadLine: {
    marginTop: 10,
    width: "100%",
    color: '#000000',
    fontWeight: '600',
    marginHorizontal: 10
  },

  author: {
    marginTop: 20,
    marginLeft: 20
  },
  description: {
    marginTop: 10,
    width: '100%'
  },
  grid: {
    marginTop: 20
  }
});
