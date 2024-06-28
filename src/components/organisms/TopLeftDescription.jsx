
import React from 'react';
import { container, descriptionHeader, descriptionBody, separator  } from '@/styles/organismsStyles/TopLeftDescription.module.css';
import HeaderText from '../atoms/HeaderText';
function TopLeftDescription(text) {
    return (
        <div className={container}>
            <HeaderText text="Description" level={3} className={descriptionHeader} />
            <hr className={separator} />
            <p className={descriptionBody}>
                {text.text}
            </p>
        </div>
    );
}

export default TopLeftDescription;