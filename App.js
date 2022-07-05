import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App Screens/HomeScreen';
import BookInputScreen from './App Screens/BookInputScreen';
import DiaryListScreen from './App Screens/DiaryListScreen';
import ViewDiaryInputScreen from './App Screens/ViewDiaryInputScreen';
import { DiaryProvider } from './Context/DiaryContext';
import EditDiaryInputScreen from './App Screens/EditDiaryInputScreen';
import BookSearchAPIScreen from './App Screens/BookSearchAPIScreen';
import SearchSelectedAPIResultScreen from './App Screens/SearchSelectedAPIResultScreen';

const navStack = createNativeStackNavigator();

const App = ({}) => {
  return (
    <DiaryProvider>
        <NavigationContainer>
          <navStack.Navigator initialRouteName='Home'>
            <navStack.Screen
              name="Home"
              component={HomeScreen}
              options={{ 
                headerTitle: "Track My Reading",
                headerTitleAlign: 'center',
                headerTintColor: 'purple',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,
                },
              }}
            />
            <navStack.Screen
              name="ViewDiaryInput"
              component={ViewDiaryInputScreen}
              options={{ 
                headerTitle: "View Diary Entry",
                headerTitleAlign: 'center',
                headerTintColor: 'purple',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,
                },
                headerBackTitle: "Back",
                headerBackTitleStyle: {
                  fontSize: 15,
                },
              }}
            />
            <navStack.Screen
              name="DiaryList"
              component={DiaryListScreen}
              options={{ 
                headerTitle: "Diary List",
                headerTitleAlign: 'center',
                headerTintColor: 'purple',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,
                },
                headerBackTitle: "Back",
                headerBackTitleStyle: {
                  fontSize: 15,
                },
              }}
            />
            <navStack.Screen
              name="BookInput"
              component={BookInputScreen}
              options={{ 
                headerTitle: "Enter Details About a Book",
                headerTitleAlign: 'center',
                headerTintColor: 'purple',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,
                },
                headerBackTitle: "Back",
                headerBackTitleStyle: {
                  fontSize: 15,
                },
              }}
            />
            <navStack.Screen
              name="EditInput"
              component={EditDiaryInputScreen}
              options={{ 
                headerTitle: "Edit Current Diary Entry",
                headerTitleAlign: 'center',
                headerTintColor: 'purple',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 18,
                },
                headerBackTitle: "Back",
                headerBackTitleStyle: {
                  fontSize: 15,
                },
              }}
            />
            <navStack.Screen
              name="BookSearchAPI"
              component={BookSearchAPIScreen}
              options={{ title: "Search for a book!"}}
            />
            <navStack.Screen
              name="SearchSelectedAPIItem"
              component={SearchSelectedAPIResultScreen}
              options={{ title: "Search for a book!"}}
            /> 
          </navStack.Navigator>
        </NavigationContainer>
      </DiaryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;