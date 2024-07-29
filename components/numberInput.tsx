"use client"

import styles from '../styles/Form.module.css';

export default function NumberInput({ value, onChange }) {
    return (
      <div className={styles.inputGroup}>
        <label className={styles.label}>학번</label>
        <input
          className={styles.input}
          required
          maxLength={4}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        ></input>
      </div>
    )
}
