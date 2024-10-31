import React, { useState, useContext, useEffect } from 'react'
import { context } from '../App';
import fetch from '../interceptor';

const useForm = (movieName, movieYear, movieGender, movieId) => {
    const [name, setName] = useState(movieName);
    const [year, setYear] = useState(movieYear);
    const [gender, setGender] = useState(movieGender);
    const [, setMovies] = useContext(context);

    useEffect(() => {
        setName(movieName);
        setYear(movieYear);
        setGender(movieGender);
    }, [movieName, movieYear, movieGender]);

    async function sendFilm(e) {
        e.preventDefault();

        const data = {
            name,
            year,
            gender
        }
        
        try{
            await fetch.post('/get-all-movies', data);
            let response = await fetch.get('/get-all-movies');
            setMovies(response.data);
            window.alert("Filme adicionado com sucesso!");
            setName('');
            setYear('');
            setGender('');
        }
        catch(err) { 
            window.alert("Não foi possível adicionar o filme");
            console.error(err);
        };
    }

    async function changeFilm (e) {
        e.preventDefault();

        const data = {
            name,
            year,
            gender
        }
        
        try{
            await fetch.put(`/get-all-movies/${movieId}`, data);
            let response = await fetch.get('/get-all-movies');
            setMovies(response.data);
            window.alert("Filme atualizado com sucesso!");
        }
        catch(err) { 
            console.log(err)
            window.alert("Não foi possível alterar os dados do filme");
        };
    }

    return {sendFilm, changeFilm, name, year, gender, setName, setYear, setGender, setMovies}

}

export default useForm;