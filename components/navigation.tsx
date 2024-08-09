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
                    <Link style={{ textDecoration: "none" }} href="/" >
                        <p>Home</p>
                    </Link> {path === "/" ? "←" : ""}
                </li>
                <li>
                    <Link style={{ textDecoration: "none" }} href="/recruit">
                        <p>Recruit</p>
                    </Link> {path === "/recruit" ? "←" : ""}
                </li>
                <li>
                    <Link style={{ textDecoration: "none" }} href="/list">
                        <p>List</p>
                    </Link> {path === "/list" ? "←" : ""}
                </li>
            </ul>
        </nav>
    )
}