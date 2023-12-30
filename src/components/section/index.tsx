import { Badge, Box, Group, Text, Title, rem } from "@mantine/core";
import Visible from "../visible";
import styles from "./section.module.css";

type SectionProps = {
  header?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Section({
  header,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <Box size="lg" py={rem(96)}>
      <Visible isVisible={header}>
        <Group justify="center" mb="lg">
          <Badge variant="transparent" size="lg">
            {header}
          </Badge>
        </Group>
      </Visible>

      <Visible isVisible={title}>
        <Title order={2} className={styles.title} ta="center" my={rem(40)}>
          {title}
        </Title>
      </Visible>

      <Visible isVisible={description}>
        <Text
          c="dimmed"
          className={styles.description}
          ta="center"
          mb={rem(80)}
        >
          {description}
        </Text>
      </Visible>

      {children}
    </Box>
  );
}
