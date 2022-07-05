import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import BookAPI from '../API/BookAPI';

const SearchSelectedAPIResultScreen = ({route}) => {
    const {id} = route.params;
    const [searchResult, setSearchResult] = useState(null);
    const getResultsById = async (id) => {
        try {
            const result = await BookAPI.get(`/${id}`);
            setSearchResult(result.data);
        }
        catch(i) {
            console.log(i);
        }
    }
    useEffect(() => {
        getResultsById(id)
    }, [])
    if (!searchResult) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle}
                source={{ uri: searchResult.image_url }}
            />
            <Text>{searchResult.name}</Text>
            <FlatList
                data={searchResult.photos}
                keyExtractor={(i) => i}
                renderItem={({item}) => {
                    return <Image
                        style={styles.imageListStyle}
                        source={{ uri: item }}
                    />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 100,
        alignSelf: 'stretch'
    },
    imageListStyle: {
        marginTop: 10,
        borderRadius: 5,
        height: 300,
        width: 300,
        alignSelf: 'center'
    }
});

export default SearchSelectedAPIResultScreen;