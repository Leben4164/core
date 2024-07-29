// nameInput.tsx
"use client"

import styles from '../styles/Form.module.css';

export default function NameInput({ value, onChange }) {
    return (
      <div className={styles.inputGroup}>
        <label className={styles.label}>이름</label>
        <input
          className={styles.input}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        ></input>    
      </div>
    )
}
