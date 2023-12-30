import { Button, Container, Group, Text, Title, rem } from "@mantine/core";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <Container size="lg">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Title className={styles.title}>
            Introducing <span className={styles.highlight}>Urbanhive</span>
          </Title>
          <Text mt="lg">
            A premier commercial real estate platform, where where the city's
            pulse meets opportunity. Urbanhive seamlessly connects small
            businesses with property owners through our intuitive mobile app.
          </Text>

          <Group mt={rem(60)}>
            <Button radius="xl" size="md" className={styles.control}>
              Get the app
            </Button>
          </Group>
        </div>
        {/* <Image src={image.src} className={styles.image} /> */}
      </div>
    </Container>
  );
}
