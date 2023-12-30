import Section from "@/components/section";
import { Card, SimpleGrid, Text } from "@mantine/core";
import styles from "./features.module.css";

const mockdata = [
  {
    title: "Listings are free",
    description:
      "Urbanhive removes financial barriers by providing complimentary listings for businesses and commercial properties. Say goodbye to expensive fees and hello to showcasing your venture or space without the burden of costs.",
  },
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
  {
    title: "Lighting fast",
    description: `Encounter swift interactions on Urbanhive,
              ensuring immediate connections between businesses and landlords,
              streamlining your search for the ideal space with unparalleled
              speed and efficiency.`,
  },
  {
    title: "Data driven",
    description:
      "Gain a competitive edge by accessing trends, market analysis, and actionable data, guiding informed decisions for your commercial real estate endeavors.",
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
      id="features"
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
