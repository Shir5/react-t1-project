import React from 'react';
import { container, responseBox } from '@/styles/organismsStyles/RightDescription.module.css';

function RightDescription({ response }) {
    return (
        <div className={container}>
            <pre className={responseBox}>{response}</pre>
        </div>
    );
}

export default RightDescription;
