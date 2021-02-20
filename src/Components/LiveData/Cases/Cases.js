import React from 'react';

import styles from './Cases.module.css';

const cases  = (props) =>{
    return(
        <div className={styles.Cases}>
            <div>
                {props.children}
                <p>{props.caseData}</p>
            </div>
        </div>
    );
}

export default cases;