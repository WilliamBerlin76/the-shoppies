import React from 'react';
import searchResults from './searchResults.module.scss';

const SearchResults = ({ films, setNominations, nominations, searchTitle }) => {

    const nominate = film => {
        let newNoms = [...nominations];
        newNoms.push(film);
        setNominations(newNoms);
    };

    const searchNoms = film => {
        for (let i = 0; i < nominations.length; i++){
            if (film.Title === nominations[i].Title && film.Year === nominations[i].Year){
                return true;
            }
        }
    };

    return (
        <div className={searchResults.container}>
            <h3>Search results for "{searchTitle}"</h3>
            <ul className={searchResults.filmList}>
                {films.map(film => {
                    return (
                        <div className={searchResults.card}>
                            <li key={film.Title}>
                                {film.Title} ({film.Year})
                            </li>
                            <button 
                                onClick={() => nominate(film)}
                                disabled={searchNoms(film) || nominations.length >= 5}
                            >Nominate</button>
                        </div>
                    );
                })}
                
            </ul>
        </div>
    )
};

export default SearchResults
