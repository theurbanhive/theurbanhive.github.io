import {
  Button,
  Container,
  Grid,
  Group,
  Text,
  Title,
  rem
} from "@mantine/core";
import Link from "next/link";
import Highlight from "../highlight";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <Container className={styles.main} fluid h="100vh">
      <Grid align="center">
        <Grid.Col
          visibleFrom="sm"
          span={{
            sm: 6,
            lg: 8
          }}
        >
          <video className={styles.video} muted autoPlay loop={false}>
            <source src="/urbanhive.mp4" type="video/mp4" />
          </video>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            sm: 4,
            lg: 4
          }}
        >
          <Container className={styles.hero} size="lg">
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
          </Container>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
