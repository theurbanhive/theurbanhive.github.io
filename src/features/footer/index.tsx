import {
  ActionIcon,
  Box,
  Container,
  Group,
  Space,
  Stack,
  Text,
  Title,
  rem
} from "@mantine/core";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AppStoreDark from "./appStoreDark.svg";
import styles from "./footer.module.css";
import GooglePlayDark from "./googlePlayDark.png";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#features" },
      { label: "Ecosystem", link: "#ecosystem" },
      { label: "Team", link: "#team" },
      { label: "Contact", link: "#contact" },
      { label: "FAQ", link: "#faq" }
      // { label: "Media assets", link: "#" },
      // { label: "Pricing", link: "#" },
      // { label: "Support", link: "#" },
      // { label: "Forums", link: "#" },
    ]
  },
  // {
  //   title: "Project",
  //   links: [
  //     { label: "Contribute", link: "#" },
  //     { label: "Changelog", link: "#" },
  //     { label: "Releases", link: "#" },
  //   ],
  // },
  {
    title: "Resources",
    links: [
      { label: "Privacy", link: "/privacy" },
      { label: "Investors", link: "mailto:investors@urbanhive.io" },
      { label: "Support", link: "mailto:support@urbanhive.io" },
      { label: "Brand", link: "/brand" }
      // { label: "Follow on Twitter", link: "#" },
      // { label: "Email newsletter", link: "#" },
      // { label: "GitHub discussions", link: "#" },
    ]
  }
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} className={styles.link} href={link.link}>
        {link.label}
      </Link>
    ));

    return (
      <div className={styles.wrapper} key={group.title}>
        <Text className={styles.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <Box maw={rem(400)}>
          <Stack pos="relative">
            <Title order={2}>Urbanhive</Title>
            <Text m={0} size="md" c="dimmed" className={styles.description}>
              Where spaces meet ideas, and opportunities flourish.
            </Text>
            <Space />
            <Group>
              <Link href="/app">
                <Image width={135} src={AppStoreDark} alt="App Store" />
              </Link>
              <Link href="/app">
                <Image
                  className={styles.googlePlay}
                  height={65}
                  width={170}
                  src={GooglePlayDark.src}
                  alt="Google Play"
                />
              </Link>
            </Group>
          </Stack>
        </Box>

        <div className={styles.groups}>{groups}</div>
      </Container>

      <Container className={styles.afterFooter}>
        <Group justify="spacebetween">
          <Text c="dimmed" size="sm">
            © 2024 Urbanhive LLC. All rights reserved.
          </Text>
        </Group>

        <Group
          gap={rem(16)}
          className={styles.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <TwitterIcon />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <GithubIcon />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <YoutubeIcon />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <LinkedinIcon />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
