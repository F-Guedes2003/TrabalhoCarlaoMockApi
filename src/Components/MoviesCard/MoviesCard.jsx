import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './MoviesCard.module.css';
import NavigationLink from '../Link/NavigationLink'

export default function MoviesCard({movie}) {
  return (
    <Link className={Styles.card} to={`/movieInfo/${movie.id}`}>
        <div className={Styles.info}>
            <p>Id: {movie.id}</p>
            <p>Name: {movie.name}</p>
        </div>
    </Link>
  )
}
