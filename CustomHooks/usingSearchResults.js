import React, { useState, useEffect } from 'react';
import BookAPI from '../API/BookAPI';

export default () => {
    const [searchResults, setSearchResults] = useState([]);
    const [errorStatement, setErrorStatement] = useState('');

    const getSearchResults = async (searchedInput) => {
        setErrorStatement('');
        try {
            const result = await BookAPI.get('?q='+searchedInput, {
                params: {
                    limit: 20,
                    term: searchedInput,
                    location: 'United Kingdom',
                    q: 'Harry Potter'
                }
            }); 
            setSearchResults(result.data);
        }
        catch(i) {
            console.log(i.message);
            setErrorStatement('Something went wrong!');
        }
    }

    return [ getSearchResults, searchResults, errorStatement ];
}