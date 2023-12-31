import Section from "@/components/section";
import { Container, SimpleGrid, Text, rem } from "@mantine/core";
import styles from "./audience.module.css";

const data = [
  {
    image: "auditors",
    title: "Branding and marketing",
    description:
      "Individuals or agencies skilled in branding, digital marketing, social media management, and advertising to boost brand visibility."
  },
  {
    image: "lawyers",
    title: "Local authorities",
    description:
      "Contacts for permits, licenses, regulations, and assistance programs relevant to the business's location and industry."
  },
  {
    image: "accountants",
    title: "Networking",
    description:
      "Platforms or associations where businesses can connect, share knowledge, and build partnerships."
  },
  {
    image: "others",
    title: "Suppliers",
    description:
      "Reliable sources for essential products or materials needed for day-to-day operations."
  }
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
    <Section
      id="ecosystem"
      header="Beyond the basics"
      title={
        <>
          Urbanhive is <span className={styles.highlight}>not</span> just a
          listing platform
        </>
      }
    >
      <Container size={rem(640)}>
        <Text c="dimmed" ta="center">
          Urbanhive is your gateway to a thriving business ecosystem. Connect
          with a diverse community of entrepreneurs, landlords, vendors, and
          experts. Uncover a world where collaboration, innovation, and growth
          intersect, propelling your business towards limitless possibilities.
        </Text>
      </Container>

      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={50}
        mt={rem(100)}
        mb={rem(50)}
      >
        {items}
      </SimpleGrid>
    </Section>
  );
}
