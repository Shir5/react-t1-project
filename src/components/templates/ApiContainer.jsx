import React, { useEffect, useRef } from 'react';
import styles from '@/styles/templatesStyles/ApiContainer.module.css';

function ApiContainer({ topLeftContent, bottomLeftContent, rightContent }) {
    const topLeftRef = useRef(null);
    const bottomLeftRef = useRef(null);
    const rightRef = useRef(null);

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
                    {topLeftContent}
                </div>
                <div className={`${styles.bottomLeft} ${styles.hidden}`} ref={bottomLeftRef}>
                    {bottomLeftContent}
                </div>
                <div className={`${styles.right} ${styles.hidden}`} ref={rightRef}>
                    {rightContent}
                </div>
            </div>
        </div>
    );
}

export default ApiContainer;
