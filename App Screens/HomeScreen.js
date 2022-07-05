import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.homeContents}>
        <Image style={styles.homeScreenImage} name="BookImage" source={require('../assets/annie-spratt-O1TNdLNvJLM-unsplash.jpg')}/>
        <Text style={styles.heading}>How to use this app:</Text>
        <Text style={styles.homeScreenText}>
          Use this app to keep track of every reading session you have!
          All you have to do is enter the book title, the pages you started and ended on, your parent or teachers comment and your own rating between 1 and 10 on how good the book was!
        </Text>
      </View>
      <View style={styles.navMenuContainer}>
        <Pressable
          onPress={() => navigation.navigate("DiaryList")}>
            <MaterialIcons name="featured-play-list" size={24} color="purple" />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}>
            <MaterialCommunityIcons name="home-variant" size={24} color="purple" />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("BookSearchAPI")}>
            <Feather name="book-open" size={24} color="purple" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  homeContents: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#fff',
    alignItems: 'center',
    bottom: 0,
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
    top: 330,
  },
  homeScreenText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    bottom: -100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    top: 90,
  },
  homeScreenImage: {
    padding: 30,
    width: 400,
    height: 220,
    marginTop: 20,
    alignItems: 'center',
  }
});

export default HomeScreen;