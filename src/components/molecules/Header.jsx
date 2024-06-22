import React from 'react';
import HeaderText from '../atoms/HeaderText.jsx';
import Logo from '../atoms/Logo.jsx';
import {header} from '@/styles/Header.module.css';
function Header() {
    return (
        <div className={header}>
            <Logo />
            <HeaderText text="Task 4" level={1} className="headerSecondary" />
            <HeaderText text="T1 Camp" level={1} className="headerTertiary" />
        </div>

    );
}

export default Header;