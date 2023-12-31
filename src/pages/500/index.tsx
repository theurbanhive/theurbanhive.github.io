import Footer from "@/features/footer";
import { Button, Container, Group, Text, Title, rem } from "@mantine/core";
import Link from "next/link";
import Illustration from "./illustration";
import styles from "./serverError.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <Container p={rem(100)} className={styles.root}>
        <div className={styles.inner}>
          <Illustration className={styles.image} />
          <div className={styles.content}>
            <Title className={styles.title}>Something bad happened</Title>
            <Text
              c="dimmed"
              size="lg"
              ta="center"
              className={styles.description}
            >
              Our servers could not handle your request. Don't worry, our
              development team was already notified.
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
