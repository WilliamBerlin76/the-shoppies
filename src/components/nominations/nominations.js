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
            <ul className={noms.filmList}>
                {nominations.map(item => {
                    return(
                        <div className={noms.card}>
                            <li key={item.Title}>{item.Title} ({item.Year})</li>
                            <button onClick={() => removeNom(item)}>Remove</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    )
};

export default Nominations;
