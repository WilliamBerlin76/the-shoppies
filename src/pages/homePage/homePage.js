import React, { useState } from 'react';
import axios from 'axios';

import homePage from './homePage.module.scss'

import SearchResults from '../../components/searchResults/searchResults';
import Nominations from '../../components/nominations/nominations';

const HomePage = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [displayTitle, setDisplayTitle] = useState('');
    const [result, setResult] = useState([]);
    const [nominations, setNominations] = useState([]);
    const [apiErr, setApiErr] = useState(false);

    const submitSearch = e => {
        e.preventDefault();
        axios
            .get(`http://www.omdbapi.com/?s=${searchTitle}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if (res.data.Response === "False"){
                    setApiErr(true);
                } else {
                    setApiErr(false);
                    setResult(res.data.Search);
                    setDisplayTitle(searchTitle);
                }
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
            {apiErr ? (
                <p>Search was unsuccessful</p>
            ) : (
                <div className={homePage.listsContainer}>
                    <SearchResults 
                        films={result}
                        setNominations={setNominations}
                        nominations={nominations}
                        searchTitle={displayTitle}
                    />
                    <Nominations 
                        nominations={nominations}
                        setNominations={setNominations}
                    />
                </div>
            )}
            
        </div>
    )
};

export default HomePage;