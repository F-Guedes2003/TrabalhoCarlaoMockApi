import React, {useContext} from 'react'
import { context } from '../App';
import Styles from './Home.module.css';

import MoviesCard from '../Components/MoviesCard/MoviesCard';

const Home = () => {
  const [movies] = useContext(context);
  
  return (
    <div className={Styles.main}>
      {movies.map((item) => {
        return <MoviesCard key={item.id} movie={item} />
      })}
    </div>
  )
}

export default Home;