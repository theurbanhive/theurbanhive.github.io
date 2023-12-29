"use client";

import { Button, Container, Group, List, Text, Title } from "@mantine/core";
import styles from "./hero.module.css";

export default () => {
  return (
    <Container size="md">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Title className={styles.title}>
            A <span className={styles.highlight}>modern</span> React <br />{" "}
            components library
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

          <List mt={30} spacing="sm" size="sm">
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={styles.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={styles.control}
            >
              Source code
            </Button>
          </Group>
        </div>
        {/* <Image src={image.src} className={styles.image} /> */}
      </div>
    </Container>
  );
};
