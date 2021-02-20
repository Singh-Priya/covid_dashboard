import React from 'react';
import styles from './NavBar.module.css';
import VirusLogo from '../assets/virus.png';

const NavBar = () => {
    

    return(
        <header className={styles.NavBar}>
            <ul>
                <li><a href='/' ><img src={VirusLogo} alt='logo' /></a></li>
                <li><a href='/' >COVID-19 Dashboard</a></li>
            </ul>     
        </header>
    );
}

export default NavBar;