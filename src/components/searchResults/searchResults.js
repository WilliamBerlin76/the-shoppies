import React from 'react';
import searchResults from './searchResults.module.scss';

const SearchResults = ({ films, setNominations, searchTitle }) => {
    return (
        <div className={searchResults.container}>
            <h2>Search results for "{searchTitle}"</h2>
            <ul className={searchResults.filmList}>
                {films.map(film => {
                    return (
                        <li>{film.Title} ({film.Year})</li>
                    );
                })}
                
            </ul>
        </div>
    )
};

export default SearchResults
