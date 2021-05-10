import React, { useState } from 'react';
import axios from 'axios';

import SearchResults from '../../components/searchResults/searchResults';

const HomePage = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [displayTitle, setDisplayTitle] = useState('');
    const [result, setResult] = useState([]);
    const [nominations, setNominations] = useState([]);

    const submitSearch = e => {
        e.preventDefault();
        axios
            .get(`http://www.omdbapi.com/?s=${searchTitle}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                console.log(res.data.Search);
                setResult(res.data.Search);
                setDisplayTitle(searchTitle);
            })
            .catch(err => {
                console.log('ERROR', err);
            });
    };

    const handleChange = e => {
        setSearchTitle(e.target.value);
    };

    return (
        <div>
            <form
                onSubmit={submitSearch}
            >
                <input 
                    placeholder="Search Movies"
                    onChange={handleChange}
                />
                <button>Search!</button>
            </form>
            <SearchResults 
                films={result}
                setNominations={setNominations}
                searchTitle={displayTitle}
            />
        </div>
    )
};

export default HomePage;