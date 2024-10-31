import React from 'react'
import Styles from './Header.module.css';
import NavigationLink from '../Link/NavigationLink';

const Header = () => {
  return (
    <header className={Styles.header}>
        <div className={Styles.logo}>
            <p><span style={{color: 'white'}}>Pobre</span><span style={{color: 'rgb(162, 0, 0)'}}>flix</span></p>
        </div>

        <div>
            <NavigationLink path={'/'} text={'Home'} />
            <NavigationLink path={'/addMovie'} text='Add movie' />
            <NavigationLink path={'/ChangeMovie'} text='Change Movie' />
            <NavigationLink path={'/RemoveMovie'} text='Remove Movie' />
        </div>
    </header>
  )
}

export default Header