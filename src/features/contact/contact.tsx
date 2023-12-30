import { Container } from "@mantine/core";
import Email from "./email";
import { Faq } from "./faq";
import Team from "./team";

export default function Contact() {
  return (
    <Container size="lg" py="xl">
      <Team />
      <Email />
      <Faq />
    </Container>
  );
}
