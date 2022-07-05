import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import DiaryContext from '../Context/DiaryContext';

const BookInputScreen = ({navigation, route}) => {
    const {NewDiaryInput} = useContext(DiaryContext);
    const [bookTitle, setBookTitle] = useState('');
    const [startingPages, setStartingPages] = useState('');
    const [endingPages, setEndingPages] = useState('');
    const [parentTeacherComment, setParentTeacherComment] = useState('');
    const [childRating, setChildRating] = useState('');
    return (
        <View>
            <Text style={styles.textLabel}>Enter the title of a book:</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder="Enter book title here..." 
                value={bookTitle}
                onChangeText={(text) => {
                    setBookTitle(text); 
                }}
            />
            <Text style={styles.textLabel}>Enter the starting page number:</Text>
            <TextInput style={styles.textInput}
                placeholder='Starting Page Number'
                value={startingPages}
                onChangeText={(text) => { 
                    setStartingPages(text); 
                }}
            />
            <Text style={styles.textLabel}>Enter the page number you ended on:</Text>
            <TextInput style={styles.textInput}
                placeholder='Ending Page Number'
                value={endingPages}
                onChangeText={(text) => { 
                    setEndingPages(text); 
                }}
            />
            <Text style={styles.textLabel}>Teacher or Parent Comment:</Text>
            <TextInput style={styles.textInput}
                placeholder='Comment from Teacher or Parent'
                value={parentTeacherComment}
                onChangeText={(text) => {
                    setParentTeacherComment(text);
                }}
            />
            <Text style={styles.textLabel}>Child's Rating of Book:</Text>
            <TextInput style={styles.textInput}
                placeholder='Numerical Rating from Child'
                value={childRating}
                onChangeText={(text) => {
                    setChildRating(text);
                }}
            />
            <Button title="Submit Diary Entry"
                onPress={() => {
                    NewDiaryInput(bookTitle, startingPages, endingPages, parentTeacherComment, childRating, () => navigation.pop());
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 30,
        padding: 12,
        margin: 3,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 25,
        paddingLeft: 10,
        marginTop: 10,
    },
});

export default BookInputScreen;