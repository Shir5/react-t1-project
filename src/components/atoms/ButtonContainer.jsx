import React from 'react';
import styles from '@/styles/atomsStyles/ButtonContainer.module.css';

const ButtonContainer = ({ onClick }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.apiButton} onClick={onClick}>
                Send Request
            </button>
        </div>
    );
};

export default ButtonContainer;
