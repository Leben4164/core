"use client"

import { useState } from "react";
import PocketBase from 'pocketbase';
import NumberInput from "./numberInput";
import NameInput from "./nameInput";
import MotivInput from "./motivInput";
import WantInput from "./wantInput";
import styles from '../styles/Form.module.css';

export default function Form() {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [motiv, setMotiv] = useState("");
    const [want, setWant] = useState("");

    const pb = new PocketBase('http://127.0.0.1:8090'); // PocketBase 서버 URL로 변경하세요

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                numberAndName : number + " " + name,
                motiv: motiv,
                want: want,
            };
            await pb.collection('information').create(data); // 'your_collection_name'을 실제 컬렉션 이름으로 변경하세요
            console.log("데이터 저장 성공:", data);
            alert("제출되었습니다.")
        } catch (error) {
            console.error("데이터 저장 실패:", error);
        }
    };

    return (
      <div className={styles.formContainer}>
        <NumberInput value={number} onChange={setNumber} />
        <NameInput value={name} onChange={setName} />
        <MotivInput value={motiv} onChange={setMotiv} />
        <WantInput value={want} onChange={setWant} />
        <p></p>
        <button className={styles.button} onClick={handleSubmit}>제출</button>
      </div>
    )
}
