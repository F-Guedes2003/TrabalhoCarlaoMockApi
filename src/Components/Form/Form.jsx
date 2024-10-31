import React, { useEffect, useState } from 'react'
import TextInput from '../Inputs/TextInput/TextInput'
import SelectInput from '../Inputs/SelectInput/SelectInput'
import { useContext } from 'react'
import { context } from '../../App'
import NumberInput from '../Inputs/NumberInput/NumberInput';
import Styles from './Form.module.css';
import Button from '../Button/Button'
import fetch from '../../interceptor'
import useForm from '../../Hooks/useForm'
import axios from 'axios'

export const Form = ({movieName = '', movieYear = '', movieGender = '', isChange=false, movieId=0}) => {
    const {sendFilm, changeFilm, name, gender, year, setName, setGender, setYear} = useForm(
        movieName, movieYear, movieGender, movieId);

  return (
    <div className={Styles.wrapper}>
        <form className={Styles.form} >
            <label htmlFor="name">Name:</label>
            <TextInput value={name} setValue={setName} />

            <label htmlFor="gender">Gender:</label>
            <SelectInput gender={gender} setGender={setGender} />

            <label htmlFor="year">Year:</label>
            <NumberInput value={year} setValue={setYear} />

            {!isChange ? <Button onClick={sendFilm} text={'Send'} /> : <Button onClick={changeFilm} text={'Change'} />}
        </form>
    </div>
  )
}
