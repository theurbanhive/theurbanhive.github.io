import Footer from "@/features/footer";
import { Button, Container, Group, Text, Title, rem } from "@mantine/core";
import Link from "next/link";
import Illustration from "./illustration";
import styles from "./notFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <Container p={rem(100)} className={styles.root}>
        <div className={styles.inner}>
          <Illustration className={styles.image} />
          <div className={styles.content}>
            <Title className={styles.title}>Nothing to see here</Title>
            <Text
              c="dimmed"
              size="lg"
              ta="center"
              className={styles.description}
            >
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
            <Group justify="center">
              <Link href="/">
                <Button size="md">Take me back to home page</Button>
              </Link>
            </Group>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
