import React, { useEffect, useRef } from 'react';
import TopLeftDescription from '../organisms/TopLeftDescription.jsx';
import BottomLeftDescription from '../organisms/BottomLeftDescription.jsx';
import RightDescription from '../organisms/RightDescription.jsx';
import styles from '@/styles/templatesStyles/ApiContainer.module.css';

function ApiContainer() {
    const topLeftRef = useRef(null);
    const bottomLeftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
        });

        if (topLeftRef.current) observer.observe(topLeftRef.current);
        if (bottomLeftRef.current) observer.observe(bottomLeftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);

        return () => {
            if (topLeftRef.current) observer.unobserve(topLeftRef.current);
            if (bottomLeftRef.current) observer.unobserve(bottomLeftRef.current);
            if (rightRef.current) observer.unobserve(rightRef.current);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={`${styles.topLeft} ${styles.hidden}`} ref={topLeftRef}>
                    <TopLeftDescription />
                </div>
                <div className={`${styles.bottomLeft} ${styles.hidden}`} ref={bottomLeftRef}>
                    <BottomLeftDescription />
                </div>
                <div className={`${styles.right} ${styles.hidden}`} ref={rightRef}>
                    <RightDescription />
                </div>
            </div>
        </div>
    );
}

export default ApiContainer;
