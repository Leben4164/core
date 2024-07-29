import { Metadata } from "next"
import Form from "../../components/form"
import styles from '../../styles/Form.module.css';

export const metadata : Metadata = {
    title: "Recruit"
}

export default function recruitPage() {
    return (
        <div>
          <h1 className={styles.h}>인적 사항 작성</h1>
          <Form />
        </div>
    )
}