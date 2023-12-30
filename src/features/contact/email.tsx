import Section from "@/components/section";
import { Button, Group, TextInput } from "@mantine/core";
import styles from "./email.module.css";
// import image from "./image.svg";

export default function Email() {
  return (
    <Section
      className={styles.wrapper}
      title="Interested in an early access?"
      description={
        <>
          If you are starting a business or have a commercial realestate
          property in the
          <span className={styles.highlight}>Greater Seattle Area</span>, we'd
          love to talk to you.
        </>
      }
    >
      <Group align="center">
        {/* <Image src={image.src} className={classes.image} /> */}
        <TextInput
          className={styles.inputWrapper}
          type="email"
          placeholder="Your email"
        />
        <Button className={styles.control}>Sign me up</Button>
      </Group>
    </Section>
  );
}
