"use client";

import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import styles from "./audience.module.css";

const data = [
  {
    image: "auditors",
    title: "Pharmacists",
    description:
      "Azurill can be seen bouncing and playing on its big, rubbery tail",
  },
  {
    image: "lawyers",
    title: "Lawyers",
    description: "Fans obsess over the particular length and angle of its arms",
  },
  {
    image: "accountants",
    title: "Bank owners",
    description:
      "They divvy up their prey evenly among the members of their pack",
  },
  {
    image: "others",
    title: "Others",
    description: "Phanpy uses its long nose to shower itself",
  },
];

export default function Audience() {
  const items = data.map((item) => (
    <div className={styles.item} key={item.image}>
      {/* <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <Image src={IMAGES[item.image]} />
      </ThemeIcon> */}

      <div>
        <Text fw={700} fz="lg" className={styles.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={styles.wrapper}>
      <Text className={styles.supTitle}>Use cases</Text>

      <Title className={styles.title} order={2}>
        PharmLand is <span className={styles.highlight}>not</span> just for
        pharmacists
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={styles.description}>
          Its lungs contain an organ that creates electricity. The crackling
          sound of electricity can be heard when it exhales. Azurill’s tail is
          large and bouncy. It is packed full of the nutrients this Pokémon
          needs to grow.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
