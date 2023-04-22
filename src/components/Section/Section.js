import React from "react";
import styles from './Section.module.scss';

const Section = ({ children, title }) => {
    return (
        <div className={styles.Section}>
            {title && <h1 className={styles.SectionTitle}>{title}</h1>}
            {children}
        </div>
    )
}

export default Section;