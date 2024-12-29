import { useState } from 'react';
import styles from './WelcomeDiv.module.css'
    const WelcomeDiv = () =>{
        let [display , setDisplay] = useState(false);
        const changeDisplay = () =>{
           setDisplay(true);
        }
        return(
        <>
            {!display && 
                (<div className={styles.welcomediv}>
                      <h2>Add Event</h2>
                 <button className={styles.addeventbtn} onClick={changeDisplay}>+</button>
                </div>
             )}
        </>
        )
    }


export default WelcomeDiv;