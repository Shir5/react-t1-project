import React from 'react';
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
} from '@/styles/organismsStyles/BottomLeftDescription.module.css';
import HeaderText from '../atoms/HeaderText';

function BottomLeftDescription({ parameters, onInputChange }) {
    return (
        <div className={container}>
            <HeaderText text="Parameters" level={3} className={descriptionHeader} />
            <hr className={separator} />
            <div className={paramsContainer}>
                {parameters.map((param, index) => (
                    <div key={index} className={paramRow}>
                        <div className={paramInfo}>
                            <div className={paramName}>{param.name}</div>
                            <div className={paramDescription}>{param.description}</div>
                        </div>
                        <input
                            type="text"
                            name={param.name}
                            className={paramInput}
                            placeholder={param.description}
                            onChange={onInputChange}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BottomLeftDescription;
