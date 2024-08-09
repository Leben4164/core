"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '../styles/Form.module.css';

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navMenu}>
                <li>
                    <Link href="/" >Home</Link> {path === "/" ? "←" : ""}
                </li>
                <li>
                    <Link href="/recruit">Recruit</Link> {path === "/recruit" ? "←" : ""}
                </li>
                <li>
                    <Link href="/list">List</Link> {path === "/list" ? "←" : ""}
                </li>
            </ul>
        </nav>
    )
}