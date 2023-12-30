import Section from "@/components/section";
import { Button, Container, Group, TextInput, rem } from "@mantine/core";
import styles from "./email.module.css";
// import image from "./image.svg";

export default function Email() {
  return (
    <Section
      id="contact"
      className={styles.wrapper}
      title="Interested in an early access?"
      description={
        <>
          If you are starting a business or have a commercial real estate
          property in the
          <span className={styles.highlight}>Greater Seattle Area</span>, we
          would love to partner with you.
        </>
      }
    >
      <Container size={rem(640)} pb={40}>
        <Group align="center">
          {/* <Image src={image.src} className={classes.image} /> */}
          <TextInput
            className={styles.inputWrapper}
            type="email"
            placeholder="Your email"
          />
          <Button className={styles.control}>Sign me up</Button>
        </Group>
      </Container>
    </Section>
  );
}
