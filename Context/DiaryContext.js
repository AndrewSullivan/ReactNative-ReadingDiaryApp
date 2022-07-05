import React, { useReducer, useEffect } from 'react';
import { actions } from '../ErrorHelpers/actionHelpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PERSISTENT_STORAGE_KEY = 'diary_data_key';

const DiaryContext = React.createContext();

const dummyDiaryData = [];

const stateReducer = (state, action) => {
    switch (action.type) {
        case actions.NewDiaryInput:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 999999),
                    date: new Date(),
                    bookTitle: action.payload.bookTitle,
                    startingPages: action.payload.startingPages,
                    endingPages: action.payload.endingPages,
                    parentTeacherComment: action.payload.parentTeacherComment,
                    childRating: action.payload.childRating,
                }
            ];
        case actions.EditDiaryInput:
            return state.map((i) => {
                if(i.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return i;
                }
            });
        case actions.RemoveDiaryInput:
             return state.filter((i) =>
                 i.id !== action.payload.id);
        case actions.SaveDiaryInput:
            try {
                AsyncStorage.setItem(PERSISTENT_STORAGE_KEY, JSON.stringify(state));
            }
            catch(i) {
                console.log(i);
            }
            finally {
                return state;
            }
        case actions.LoadDiaryInput:
            return [
                ...state,
                {
                    id: action.payload.id,
                    date: new Date(action.payload.date),
                    bookTitle: action.payload.bookTitle,
                    startingPages: action.payload.startingPages,
                    endingPages: action.payload.endingPages,
                    parentTeacherComment: action.payload.parentTeacherComment,
                    childRating: action.payload.childRating,
                }
            ];
        default:
            return state;
    }
}

export const DiaryProvider = ({children}) => {
    const [state, dispatch] = useReducer(stateReducer, dummyDiaryData);
    useEffect(() => {
        const retrieveData = async () => {
            const storage = await AsyncStorage.getItem(PERSISTENT_STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                initialItemState = JSON.parse(storage);
                initialItemState.forEach(dataItem => {
                    dispatch({type: actions.LoadDiaryInput, payload: dataItem});
                })
            }
        }
        retrieveData();
    }, [PERSISTENT_STORAGE_KEY]);

    const newInput = (bookTitle, startingPages, endingPages, parentTeacherComment, childRating, callback) => {
        dispatch({type: actions.NewDiaryInput, payload: { bookTitle, startingPages, endingPages, parentTeacherComment, childRating }});
        dispatch({type: actions.SaveDiaryInput});
        if (callback) {
            callback();
        }
    }

    const removeInput = (id, callback) => {
        dispatch({type: actions.RemoveDiaryInput, payload: { id:id }});
        dispatch({type: actions.SaveDiaryInput});
        if (callback) {
            callback();
        }
    }

    const editInput = (id, bookTitle, startingPages, endingPages, date, parentTeacherComment, childRating, callback) => {
        dispatch({type: actions.EditDiaryInput, payload: {id, bookTitle, startingPages, endingPages, date, parentTeacherComment, childRating}});
        dispatch({type: actions.SaveDiaryInput});
        if(callback) {
            callback();
        }
    }

    return (
        <DiaryContext.Provider value={{
            state: state,
            NewDiaryInput: newInput,
            DeleteDiaryInput: removeInput,
            EditDiaryInput: editInput,
        }}>
            {children}
        </DiaryContext.Provider>
    )
};

export default DiaryContext;