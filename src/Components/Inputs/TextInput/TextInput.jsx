import React from 'react'
import Styles from './TextInput.module.css';

const TextInput = ({value, setValue}) => {

    return (
        <input className={Styles.input} value={value} onChange={(e) => {setValue(e.target.value)}} type='text' />
    )
}

export default TextInput