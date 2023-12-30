import Visible from "@/components/visible";
import { Avatar, Group, Paper, Text, rem } from "@mantine/core";
import styles from "./user.module.css";

type UserProps = {
  imageUrl: string;
  displayName: string;
  position: string;
  blurb: string;
  children?: React.ReactNode;
};

export default function User({
  imageUrl = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  displayName,
  position,
  blurb,
  children,
}: UserProps) {
  return (
    <Paper
      className={styles.card}
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
      mt={rem(36)}
    >
      <Avatar
        className={styles.avatar}
        src={imageUrl}
        size={80}
        radius={80}
        mx="auto"
      />

      <Visible isVisible={children}>
        <Group wrap="nowrap" gap={rem(20)} justify="flex-end">
          {children}
        </Group>
      </Visible>

      <Text className={styles.name} fz="xl" fw={500} pt={rem(16)}>
        {displayName}
      </Text>

      <Text c="dimmed" fz="md">
        {position} @ Urbanhive
      </Text>

      <Text pt={rem(16)} fz="md">
        {blurb}
      </Text>
    </Paper>
  );
}
