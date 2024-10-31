import React from 'react'
import Styles from './Link.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationLink({path, text}) {
  const location = useLocation();

  return (
    <Link 
    className={`${Styles.link} ${location.pathname === path && Styles.active}`}
    to={`${path}`}>
        {text}
    </Link> 
  )
}
