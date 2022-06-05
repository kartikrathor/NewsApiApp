import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/action/NewsAction';
import CommonContainer from '../components/CommonContainer';
import GridComponent from '../components/GridComponent';
import NewsDetailsComponent from '../components/NewsDetailsComponent';


export default function NewsDetails({ route, navigation }) {

    const { title, description, image, author } = route.params;

    console.log("imagee",  image)

    const news = useSelector((state) => state.news?.getNewsList?.data?.articles);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return (
        <View>
            <CommonContainer title="News Details" />

            <View style={styles.grid}>
                <Image
                    style={styles.image}
                    source={{ uri:image }}
                />
                <Text style={styles.imageHeadLine}> {JSON.stringify(title)} </Text>
                
                <Text style={styles.author}>Author: {author?  JSON.stringify(author): "N/A"}</Text>
                <Text style={styles.desc}>{JSON.stringify(description)}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        marginLeft: 10
    },
    desc: {
        marginTop: 80,
        width: '100%',
        marginLeft:10
    },
    grid: {
        marginTop: 20,
       
    }
});
