import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DiaryContext from '../Context/DiaryContext';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const DiaryListScreen = ({ navigation }) => {
    const {state, DeleteDiaryInput} = useContext(DiaryContext);    

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('BookInput')}> 
                    <AntDesign name="plus" size={30} color="purple" />
                </Pressable>
            )
        })
    }, [state]);
    return (
        <View style={styles.screenContainer}>
            <FlatList 
                data={state}
                keyExtractor={(b) => b.id.toString()}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => 
                            navigation.navigate('ViewDiaryInput', {
                            id: item.id,
                            date: item.date.toUTCString(),
                            bookTitle: item.bookTitle,
                            startingPages: item.startingPages,
                            endingPages: item.endingPages,
                            parentTeacherComment: item.parentTeacherComment,
                            childRating: item.childRating
                            })}>
                            <View style={styles.diaryItemContainer}>
                                <View style={styles.entryDateContainer}>
                                <Text style={styles.dateLabel}>
                                    {item.date.toLocaleDateString()}
                                </Text>
                                <Text style={styles.dateLabel}>
                                    {item.date.toLocaleTimeString()}
                                </Text>
                            </View>
                            <Text style={styles.bookTitleLabel}>{item.bookTitle}</Text>
                            <View style={styles.entryDateContainer}>
                                <Text style={styles.pagesLabel}>{item.startingPages}</Text>
                                <Text style={styles.pagesLabel}>{item.endingPages}</Text>
                            </View>
                            <View style={styles.deleteInputIcon}>
                            <Pressable onPress={() => {
                                DeleteDiaryInput(item.id);
                            }}>
                                <MaterialIcons name="delete-sweep" size={30} color="purple" />
                            </Pressable>
                            </View>
                            </View>
                        </Pressable>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
      },
    diaryItemContainer: {
        marginTop: 20,
        padding: 10,
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    entryDateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bookTitleLabel: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 50,
        flex: 1,
        alignSelf: 'center',
    },
    pagesContrainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    startingPagesLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 10,
    },
    endingPagesLabel:{
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 10,
    },
    deleteInputIcon: {
        paddingLeft: 20,
        paddingRight: 10,
        alignSelf: 'center',
    },
});

export default DiaryListScreen;