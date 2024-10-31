import React from 'react'
import Styles from './Button.module.css';

export default function Button({text, onClick}) {
  return (
    <button className={Styles.button} onClick={onClick}>{text}</button>
  )
}
