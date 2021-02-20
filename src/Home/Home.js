import React from 'react';
import LiveData from '../Components/LiveData/LiveData';
import CountryStats from '../Components/CountryStats/CountryStats';
import styles from './Home.module.css';


const Home = () => {
    return(
        <div className={styles.Home}>
                <div>
                    <LiveData />
                </div>
                <CountryStats />            
        </div>
    );
}

export default Home;