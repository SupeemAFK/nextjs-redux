import React from 'react'

import styles from '../styles/Input.module.css'

export default function Input({ handleOnChange, postForm, label_1, label_2 }) {
    const name_1 = label_1.toLowerCase()
    const name_2 = label_2.toLowerCase()

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>
                <label>{label_1}</label>
                <input type="text" value={postForm[name_1]} name={name_1} className={styles.input} onChange={(e) => handleOnChange(e)} />
            </div>
            <div className={styles.inputLabel}>
                <label>{label_2}</label>
                <input type="text" value={postForm[name_2]} name={name_2} className={styles.input} onChange={(e) => handleOnChange(e)} />
            </div>
        </div>
    )
}
