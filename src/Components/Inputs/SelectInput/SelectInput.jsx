import React, {useContext} from 'react'
import Styles from './SelectInput.module.css';
import { context } from '../../../App';

const SelectInput = ({setGender, gender}) => {

  return (
    <select className={Styles.input} value={gender} onChange={(e) => {setGender(e.target.value)}}>
        <option value="" hidden >Choose a genre</option>
        <option value="horror">Horror</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Scifi">Scifi</option>
        <option value="Suspense">Suspense</option>
        <option value="Comedy">Comedy</option>
    </select>
  )
}

export default SelectInput;