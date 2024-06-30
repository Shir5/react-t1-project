import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/templatesStyles/ApiContainer.module.css';
import ButtonContainer from '../../components/atoms/ButtonContainer';
import BottomLeftDescription from '../organisms/BottomLeftDescription';

function ApiContainer({ topLeftContent, bottomLeftContent, rightContent, requestHandler }) {
    const [parameterValues, setParameterValues] = useState({});
    const [response, setResponse] = useState('');
    const leftRef = useRef(null);
    const topLeftRef = useRef(null);
    const bottomLeftRef = useRef(null);
    const rightRef = useRef(null);
    const apiButtonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                } else {
                    entry.target.classList.remove(styles.visible);
                }
            });
        }, {
            threshold: 0.1,
        });

        if (leftRef.current) observer.observe(leftRef.current);
        if (topLeftRef.current) observer.observe(topLeftRef.current);
        if (bottomLeftRef.current) observer.observe(bottomLeftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);
        if (apiButtonRef.current) observer.observe(apiButtonRef.current);

        return () => {
            if (leftRef.current) observer.unobserve(leftRef.current);
            if (topLeftRef.current) observer.unobserve(topLeftRef.current);
            if (bottomLeftRef.current) observer.unobserve(bottomLeftRef.current);
            if (rightRef.current) observer.unobserve(rightRef.current);
            if (apiButtonRef.current) observer.unobserve(apiButtonRef.current);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setParameterValues(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleButtonClick = async () => {
        try {
            const responseData = await requestHandler(parameterValues);
            setResponse(responseData);
        } catch (error) {
            console.error('API request failed', error);
            setResponse('An error occurred while making the request.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={`${styles.left} ${styles.hidden}`} ref={leftRef}>
                    <div className={`${styles.topLeft} ${styles.hidden}`} ref={topLeftRef}>
                        {topLeftContent}
                    </div>
                    <div className={`${styles.bottomLeft} ${styles.hidden}`} ref={bottomLeftRef}>
                        {bottomLeftContent.parameters ? (
                            <BottomLeftDescription
                                parameters={bottomLeftContent.parameters}
                                onInputChange={handleInputChange}
                            />
                        ) : (
                            <div>No parameters required for this request.</div>
                        )}
                    </div>
                </div>
                <div className={`${styles.right} ${styles.hidden}`} ref={rightRef}>
                    {React.cloneElement(rightContent, { response })}
                </div>
                <div className={`${styles.apiButton} ${styles.hidden}`} ref={apiButtonRef}>
                    <ButtonContainer onClick={handleButtonClick} />
                </div>
            </div>
        </div>
    );
}

export default ApiContainer;
