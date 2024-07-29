"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
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