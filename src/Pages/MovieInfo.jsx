import React, { useImperativeHandle } from 'react'
import Styles from './MovieInfo.module.css';
import { useContext, useEffect, useState } from 'react';
import { context } from '../App';
import { useParams } from 'react-router-dom';
import Cancel from '../Hooks/useCancel';

//components
import Button from '../Components/Button/Button';

const MovieInfo = () => {
    const [movies] = useContext(context);
    const [movie, setMovie] = useState();
    const {id} = useParams();
    const { cancel } = Cancel();

    useEffect(() => {
        setMovie(movies.find((movie) => movie.id == id))
        }, [])

    return (
        <>
            {movie && (
                <div className={Styles.movieInfos}>
                    <h1 className={Styles.title}>{movie.name}</h1>
                    <div className={Styles.movieDetails}>
                        <p>year: {movie.year}</p>
                        <p>Gender: {movie.gender}</p>
                    </div>

                    <Button onClick={cancel} text={'cancel'} />
                </div>
            )}
        </>
    )
}

export default MovieInfo