import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import BookAPI from '../API/BookAPI';
import usingSearchResults from '../CustomHooks/usingSearchResults';

const BookSearchAPIScreen = ({navigation}) => {
    const [getSearchResults, searchResults, errorStatement] = usingSearchResults([]);
    const [searchedInput, setSearchedInput] = useState('harry');
        
    useEffect(() => {
        getSearchResults(searchedInput);
    }, []);
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.errorStatementText}>{ (errorStatement !== '') ? errorStatement: null }</Text>
            <Text style={styles.screenText}>Search something:</Text>
            <TextInput style={styles.userInput} />
            <Button title="Search for a book" />
            <FlatList
                data={searchResults.books}
                keyExtractor={(i) => i.id}
                renderItem={({item}) => {
                    return (
                        
                        <Pressable onPress={ () => {
                                navigation.navigate('SearchSelectedAPIItem', { id: item.id})
                            }
                        }>
                            <Text style={styles.screenText}>{item.name}</Text>
                        </Pressable>
                    );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
    },
    userInput: {
        fontSize: 15,
        padding: 5,
        margin: 5,
        borderWidth: 1,
    },
    screenText: {
        fontSize: 15,
        paddingLeft: 10,
        marginTop: 5,
    },
    errorStatementText: {
        fontSize: 25,
        color: 'red',
    },
    navMenuContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#e0eeee',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        paddingTop: 30,
        bottom: 0,
        top: 240,
    }
});

export default BookSearchAPIScreen;