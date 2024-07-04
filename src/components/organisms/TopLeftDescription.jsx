import React from 'react';
import { container, descriptionHeader, descriptionBody, separator } from '@/styles/organismsStyles/TopLeftDescription.module.css';
import HeaderText from '../atoms/HeaderText';

function TopLeftDescription({ headerText, text }) {
    return (
        <div className={container}>
            <HeaderText text={headerText} level={3} className={descriptionHeader} />
            <hr className={separator} />
            <p className={descriptionBody}>
                {text}
            </p>
        </div>
    );
}

export default TopLeftDescription;
