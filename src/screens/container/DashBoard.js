import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/action/NewsAction';
import CommonContainer from '../components/CommonContainer';
import GridComponent from '../components/GridComponent';



export default function DashBoard({ navigation }) {

    const news = useSelector((state) => state.news?.getNewsList?.data?.articles);
    console.log(news)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews())
    }, [])

 
    return (
        <View>
            <CommonContainer title='Top Headlines' navigation = {navigation} search = {true} />
            <FlatList
                data={news}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate("NewsDetails",{title: item.title, description:item.description, image:item.urlToImage,author: item.author}) }}>
                        <View style={styles.container}>
                            <View style={styles.grid}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.urlToImage }}
                                />
                                <Text numberOfLines={2} style={styles.imageHeadLine}>{item.title} </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )}

            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image:{
        height:190,
        width:180,
    },
    imageHeadLine:{
        marginTop:-50,
        width:160,
        color:'#FFFFFF',
        fontWeight:'600',
        marginHorizontal:10
        
    },
    grid:{
      marginTop:20
    }

});
