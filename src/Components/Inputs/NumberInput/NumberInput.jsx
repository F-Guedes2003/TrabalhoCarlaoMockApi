import React from 'react'
import Styles from './NumberInput.module.css';

const NumberInput = ({value, setValue}) => {

    return (
        <input className={Styles.input} value={value} onChange={(e) => {setValue(e.target.value)}} type='number' />
    )
}

export default NumberInput;