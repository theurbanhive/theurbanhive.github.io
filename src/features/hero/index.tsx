import Highlight from "@/components/highlight";
import { Button, Container, Group, Text, Title, rem } from "@mantine/core";
import Link from "next/link";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <Container size="lg">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Title className={styles.title}>
            Introducing <Highlight>Urbanhive</Highlight>
          </Title>
          <Text mt="lg">
            A premier commercial real estate platform, where where the city's
            pulse meets opportunity. Urbanhive seamlessly connects small
            businesses with property owners through our intuitive mobile app.
          </Text>

          <Group mt={rem(60)}>
            <Link href="/app">
              <Button radius="xl" size="md" className={styles.control}>
                Get the app
              </Button>
            </Link>
          </Group>
        </div>
        {/* <Image src={image.src} className={styles.image} /> */}
      </div>
    </Container>
  );
}
