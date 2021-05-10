import React from 'react'
import noms from './nominations.module.scss';

const Nominations = ({ nominations, setNominations }) => {

    const removeNom = film => {
        let newNoms = [...nominations].filter(item => {
            if (item.Title === film.Title){
                if (item.Year === film.Year){
                    return false;
                }
            } 
            return true;
        });
        setNominations(newNoms);
    };

    return (
        <div className={noms.container}>
            <h3>Nominations</h3>
            {nominations.length >= 5 && (
                <p>You have selected the maximum number of nominations</p>
            )}
            <ul className={noms.filmList}>
                {nominations.map(item => {
                    return(
                        <>
                            <li key={item.Title}>{item.Title} ({item.Year})</li>
                            <button onClick={() => removeNom(item)}>Remove</button>
                        </>
                    );
                })}
            </ul>
        </div>
    )
};

export default Nominations;
