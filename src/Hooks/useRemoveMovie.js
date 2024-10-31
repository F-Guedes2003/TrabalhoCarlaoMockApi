import React, { useState, useContext } from 'react'
import fetch from '../interceptor';
import { context } from '../App';

const useRemoveMovie = () => {
    const [movies, setMovies] = useContext(context);
    const [id, setId] = useState('');


    async function findMovie(e) {
            e.preventDefault();
            const updatedMovies = movies.filter(movie => movie.id != id);
            try{
                await fetch.delete(`/get-all-movies/${id}`, updatedMovies);
                let response = await fetch.get(`/get-all-movies`);
                setMovies(response.data);
                window.alert("Filme removido com sucesso!");
            }
            catch(err) { 
                console.error(err);
                window.alert("Filme não encontrado!") ;
            }
    }

    return { findMovie, id, setId };
}

export default useRemoveMovie;