import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import DiaryContext from '../Context/DiaryContext';

const EditInputScreen = ({navigation, route}) => {
    const {id} = route.params;
    const {state, EditDiaryInput} = useContext(DiaryContext);
    const currentDiaryEntry = state.find((i) => i.id === id);
    const [bookTitle, setBookTitle] = useState(currentDiaryEntry.bookTitle);
    const [startingPages, setStartingPages] = useState(currentDiaryEntry.startingPages);
    const [endingPages, setEndingPages] = useState(currentDiaryEntry.endingPages);
    const [parentTeacherComment, setParentTeacherComment] = useState(currentDiaryEntry.parentTeacherComment);
    const [childRating, setChildRating] = useState(currentDiaryEntry.childRating);
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
                color="#8A2BE2"
                onPress={() => {
                    EditDiaryInput(currentDiaryEntry.id, bookTitle, startingPages, endingPages, currentDiaryEntry.date, parentTeacherComment, childRating, () => navigation.pop());
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

export default EditInputScreen;