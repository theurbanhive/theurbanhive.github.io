"use client";

import ToggleTheme from "@/components/toggleTheme/toggleTheme";
import { Group } from "@mantine/core";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Group justify="center" align="center" h="100%">
        <Link href="/" className={styles.brand}>
          Urbanhive
        </Link>
        <ToggleTheme />
      </Group>
    </header>
  );
}
