import React, {useContext, useState} from 'react'
import { context } from '../App'
import TextInput from '../Components/Inputs/TextInput/TextInput';
import { Form } from '../Components/Form/Form';

export const ChangeMovieDetails = () => {
    const [movies] = useContext(context);
    const [id, setId] = useState('');
    const [movie, setMovie] = useState();
  
    function findMovie(e) {
        e.preventDefault();
        const foundMovie = movies.find(movie => movie.id == id);
        setMovie(foundMovie);
    }

    return (
    <>
        <form onSubmit={findMovie}>
            <label htmlFor="id">movieId: </label>
            <TextInput value={id} setValue={setId} />
            <button>Search</button>
        </form>

        {movie ? (<Form movieId={id} 
            isChange={true}
            movieName={movie.name} 
            movieYear={movie.year} 
            movieGender={movie.gender} />) : <p>Insira o Id de um filme existente para alterá-lo</p>}
    </>
  )
}
