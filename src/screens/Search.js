import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList , TouchableWithoutFeedback, Image} from 'react-native';
import CommonContainer from './components/CommonContainer';



export default function Search({ navigation }) {

    const [searchData, setsearchData] = useState("apple");

    const [data, setData] = useState();

    const [list, setList] = useState();



    function fetchSearch() {

        console.log("in")
        var url = 'http://newsapi.org/v2/everything?' +
            'q=' + `${searchData}`
            + '&' +
            'from=2022-06-04&' +
            'sortBy=popularity&' +
            'apiKey=b9a7c60c709b45c390aa4cd2fcfba05b';

        var req = new Request(url);

        fetch(req)
            .then(function (response) { 
                setData(response.json());
                console.log("data", data)
            })

            if(data){
                setList(data._W.articles)
                console.log("sd", data?._W)
                console.log("list", list)
            }


    }






    return (
        <View style={styles.container}>
            <CommonContainer title='Search' />


        {!list && <View>
            <TextInput
                style={styles.input}
                onChangeText={setsearchData}
                placeholder="Search"
            />

            <Button title="Search" style={styles.button} onPress={() => { fetchSearch() }} />
            </View>}

            {list &&
             <View>
               <FlatList
                data={list}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate("NewsDetails",{title: item.title, description:item.description, image:item.urlToImage,author: item.author}) }}>
                        <View style={styles.container}>
                            <View style={styles.grid}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.urlToImage }}
                                />
                                <Text numberOfLines={3} style={styles.imageHeadLine}>{item.content} </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )}

            />
             </View>
            }


        

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        height: 50,
        marginTop: 40,
        backgroundColor: "#00000020",

        textAlign: 'center',
        marginBottom: 20
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
        marginHorizontal:10,
    
    },
    grid:{
      marginTop:20
    }


});
