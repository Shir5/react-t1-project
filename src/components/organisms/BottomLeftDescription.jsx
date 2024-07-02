import React, { useState } from 'react';
import {
    container,
    descriptionHeader,
    separator,
    paramsContainer,
    paramRow,
    paramInfo,
    paramName,
    paramDescription,
    paramInput,
    eyeIcon,
} from '@/styles/organismsStyles/BottomLeftDescription.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import HeaderText from '../atoms/HeaderText';

function BottomLeftDescription({ parameters, onInputChange }) {
    const [visibleParams, setVisibleParams] = useState({});

    const toggleVisibility = (name) => {
        setVisibleParams((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div className={container}>
            <HeaderText text="Parameters" level={3} className={descriptionHeader} />
            <hr className={separator} />
            {parameters && parameters.length > 0 ? (
                <div className={paramsContainer}>
                    {parameters.map((param, index) => (
                        <div key={index} className={paramRow}>
                            <div className={paramInfo}>
                                <div className={paramName}>{param.name}</div>
                                <div className={paramDescription}>{param.description}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type={param.hidden && !visibleParams[param.name] ? 'password' : 'text'}
                                    name={param.name}
                                    className={paramInput}
                                    placeholder={param.description}
                                    onChange={onInputChange}
                                />
                                {param.hidden && (
                                    <div className={eyeIcon} onClick={() => toggleVisibility(param.name)}>
                                        {visibleParams[param.name] ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={paramsContainer}>No parameters required for this request.</div>
            )}
        </div>
    );
}

export default BottomLeftDescription;
