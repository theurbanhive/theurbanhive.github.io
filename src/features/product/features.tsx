import Section from "@/components/section";
import { Card, SimpleGrid, Text } from "@mantine/core";
import styles from "./features.module.css";

const mockdata = [
  {
    title: "Keep it simple",
    description:
      "Urbanhive simplifies the commercial real estate searching and leasing process, providing businesses and landlords with an efficient platform to find, negotiate, and secure leases, reducing time and hassle. ",
  },
  {
    title: "Growing community",
    description:
      "Stong partnerships are key to establishing a successful small business. That's why we have created a platform that puts people first and fosters a sense of belonging and connection among our users.",
  },
  {
    title: "Do more on the go",
    description:
      "We've built a cohesive mobile experience that's packed with features designed to make your small business journey as enjoyable and engaging as possible. From personalized recommendations to real-time chat, we've got you covered.",
  },
];

export default function Features() {
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={styles.card}
      padding="xl"
    >
      <Text fz="xl" fw={500} className={styles.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="md" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Section
      header="Core Features"
      title="Find the perfect location for your business"
      description="Our platform empowers small businesses to showcase their vision, enabling direct communication with landlords, laying the groundwork for your success."
    >
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Section>
  );
}
