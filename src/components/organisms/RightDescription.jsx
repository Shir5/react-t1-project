import React, { useState } from 'react';
import { container, responseBox, eyeIcon } from '@/styles/organismsStyles/RightDescription.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function RightDescription({ response }) {
    const [showResponse, setShowResponse] = useState(false);

    const toggleResponseVisibility = () => {
        setShowResponse(prevShowResponse => !prevShowResponse);
    };

    return (
        <div className={container}>
            {response && (
                <>
                    <div className={eyeIcon} onClick={toggleResponseVisibility}>
                        {showResponse ? <FaEyeSlash /> : <FaEye />}
                    </div>
                    <pre className={responseBox}>
                        {showResponse ? response : 'Click eye icon to reveal response'}
                    </pre>
                </>
            )}
            {!response && (
                <pre className={responseBox}>
                    No response data available
                </pre>
            )}
        </div>
    );
}

export default RightDescription;
