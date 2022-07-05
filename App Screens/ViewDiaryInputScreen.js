import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ViewDiaryInputScreen = ({navigation, route}) => {
    const {id, bookTitle, endingPages, date, parentTeacherComment, childRating} = route.params;
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.textStyle}>ID: {id}</Text>
            <Text style={styles.textStyle}>DATE: {new Date(date).toLocaleDateString()}</Text>
            <Text style={styles.textStyle}>BOOK TITLE: {bookTitle}</Text>
            <Text style={styles.textStyle}>CURRENT PAGE: {endingPages}</Text>
            <Text style={styles.textStyle}>PARENT/TEACHER COMMENT: {parentTeacherComment}</Text>
            <Text style={styles.textStyle}>CHILD RATING: {childRating}</Text>
            <View style={styles.editButtonContainer}>
                <Button style={styles.textStyle}
                    title='Edit Diary Entry'
                    color="#8A2BE2"
                    onPress={() => {
                        navigation.navigate('EditInput', {id, id})
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
    },
    textStyle: {
        top: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    editButtonContainer: {
        flex: 1,
        alignItems: 'center',
        top: 50,
    }
});

export default ViewDiaryInputScreen;