import { Box, Group, rem } from "@mantine/core";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <Box pb={rem(200)}>
      <header className={styles.header}>
        <Group justify="center" h="100%">
          <Link href="/" className={styles.brand}>
            Urbanhive
          </Link>
        </Group>
      </header>
    </Box>
  );
}
