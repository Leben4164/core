"use client"

import styles from '../styles/Form.module.css';

export default function WantInput({ value, onChange }) {
    return (
      <div className={styles.inputGroup}>
        <label className={styles.label}>희망사항</label>
        <textarea
          className={styles.textArea}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        ></textarea>    
      </div>
    )
}
