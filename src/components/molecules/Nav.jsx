// src/components/molecules/Nav.jsx
import React from 'react';

const Nav = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <ul>
                <li onClick={() => scrollToSection('section1')}>Get Roles</li>
                <li onClick={() => scrollToSection('section2')}>Sign Up</li>
                <li onClick={() => scrollToSection('section3')}>Get Code</li>
                <li onClick={() => scrollToSection('section4')}>Set Status</li>
            </ul>
        </nav>
    );
};

export default Nav;
