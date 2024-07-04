// src/components/molecules/Header.jsx
import React from 'react';
import HeaderText from '../atoms/HeaderText.jsx';
import Logo from '../atoms/Logo.jsx';
import styles from '@/styles/moleculesStyles/Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <Logo />
            <HeaderText text="Task 4" level={1} className={styles.headerSecondary} />
            <HeaderText text="T1 Camp" level={1} className={styles.headerTertiary} />
        </div>
    );
}

export default Header;
